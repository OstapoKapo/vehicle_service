import { getUserByIdEndpoint } from "@/api/user/user.endpoint";
import { UserContainer } from "@/components/containers/userContainer.component";
import { User } from "@/types/user.type";

const UserPage = async ({ params }: { params: { id: string } }) => {

    let user: null | User = null;
    const {id} = await params;
    try{
        console.log("Fetching user with id:", id);
        const res = await getUserByIdEndpoint( id);
        user = res.user;
        return (
            <UserContainer user={user} />
        );
    }catch(err){
        return (
            <div className="page">
                <h1 className="text-2xl font-bold">Error loading user</h1>
            </div>
        );
    }
}

export default UserPage;