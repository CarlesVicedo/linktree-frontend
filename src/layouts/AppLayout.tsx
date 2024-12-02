import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getUser } from "../api/LinkTreeAPI";
import LinkTree from "../components/LinkTree";

const AppLayout = () => {

    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 1,
        refetchOnWindowFocus: false
    })

    if (isLoading) return 'Loading...'
    if (isError) return <Navigate to='/auth/login' />
    if (data) return <LinkTree data={data} />

}

export default AppLayout