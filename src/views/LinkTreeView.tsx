import { useState } from "react"
import { social } from "../data/social"
import LinkTreeInput from "../components/LinkTreeInput"
import { isValidUrl } from "../utils"
import { toast } from "sonner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProfile } from "../api/LinkTreeAPI"
import { User } from "../types"

const LinkTreeView = () => {
    const [linkTreeLinks, setLinktreeLinks] = useState(social)

    const queryClient = useQueryClient()
    const user: User = queryClient.getQueryData(['user'])!
    const { mutate } = useMutation({
        mutationFn: updateProfile,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: () => {
            toast.success('Properly updated')
        }
    })

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedLinks = linkTreeLinks.map(link => link.name === e.target.name ? { ...link, url: e.target.value } : link)
        setLinktreeLinks(updatedLinks)
    }

    const handleEnableLink = (socialNetwork: string) => {
        const updatedLinks = linkTreeLinks.map(link => {
            if (link.name === socialNetwork) {
                if (isValidUrl(link.url)) {
                    return { ...link, enabled: !link.enabled }
                } else {
                    toast.error('Not valid URL.')
                }
            }
            return link
        })
        setLinktreeLinks(updatedLinks)

        queryClient.setQueryData(['user'], (prevData: User) => {
            return {
                ...prevData,
                links: JSON.stringify(updatedLinks)
            }
        })
    }

    return (
        <div className="space-y-5">
            {linkTreeLinks.map(item => (
                <LinkTreeInput
                    key={item.name}
                    item={item}
                    handleUrlChange={handleUrlChange}
                    handleEnableLink={handleEnableLink}
                />
            ))}
            <button
                className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded font-bold"
                onClick={() => mutate(user)}
            >Save changes</button>
        </div>
    )
}

export default LinkTreeView