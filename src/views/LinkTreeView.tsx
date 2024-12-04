import { useState } from "react"
import { social } from "../data/social"
import LinkTreeInput from "../components/LinkTreeInput"

const LinkTreeView = () => {
    const [linkTreeLinks, setLinktreeLinks] = useState(social)

    console.log(linkTreeLinks)

    return (
        <div className="space-y-5">
            {linkTreeLinks.map(item => (
                <LinkTreeInput
                    key={item.name}
                    item={item}
                />
            ))}
        </div>
    )
}

export default LinkTreeView