import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { SocialNetwork } from "../types"

type LinkTreeLinkProps = {
    link: SocialNetwork
}

const LinkTreeLink = ({ link }: LinkTreeLinkProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: link.id,
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <li
            ref={setNodeRef}
            style={style}
            className="bg-white px-5 py-2 flex items-center gap-5 rounded-lg touch-none"
            {...attributes}
            {...listeners}
        >
            <div
                data-testid="link-tree-link-image"
                className="w-12 h-12 bg-cover"
                style={{ backgroundImage: `url('/social/icon_${link.name}.svg')` }}
            >
            </div>
            <p>Visit my: <span className="font-bold">{link.name}</span></p>
        </li>
    )
}

export default LinkTreeLink