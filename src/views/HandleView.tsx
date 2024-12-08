import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getUserByHandle } from "../api/LinkTreeAPI"

const HandleView = () => {
    const params = useParams()
    const handle = params.handle!

    const { data, error, isLoading } = useQuery({
        queryFn: () => getUserByHandle(handle),
        queryKey: ['handle', handle],
        retry: 1
    })

    console.log(isLoading)
    console.log(error)
    console.log(data)

    return (
        <div>HandleView</div>
    )
}

export default HandleView