import { useState } from "react"
import { social } from "../data/social"
import LinkTreeInput from "../components/LinkTreeInput"

const LinkTreeView = () => {
    const [linkTreeLinks, setLinktreeLinks] = useState(social)

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedLinks = linkTreeLinks.map(link => link.name === e.target.name ? { ...link, url: e.target.value } : link)
        setLinktreeLinks(updatedLinks)
    }

    const handleEnableLink = (socialNetwork: string) => {
        const updatedLinks = linkTreeLinks.map(link => link.name === socialNetwork ? { ...link, enabled: !link.enabled } : link)
        setLinktreeLinks(updatedLinks)
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
        </div>
    )
}

export default LinkTreeView