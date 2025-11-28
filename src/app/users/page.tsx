import { getAllUsersEndpoint } from "@/api/user/user.endpoint";
import { AllUsersContainer } from "@/components/containers/allUsersContainer.component"
import { PAGINATION_LIMIT } from "@/constants/app.constants";
import { GetAllUsersRes } from "@/types/user.type";

const UsersPage = async () => {

    let allUsers: null | GetAllUsersRes = null;
    try{
        const res = await getAllUsersEndpoint(1, PAGINATION_LIMIT);
        allUsers = res;
        return (
            <AllUsersContainer initialData={allUsers} />
        );
    } catch (err) {
        return (
            <div className="page">
                <h1 className="text-2xl font-bold">Error loading users</h1>
            </div>
        );
    }
}

export default UsersPage;