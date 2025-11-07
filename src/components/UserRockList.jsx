import { useEffect } from "react"

export const UserRockList = ({ userRocks, fetchUserRocks }) => {
    useEffect(() => {
        fetchUserRocks()
    }, [])

    const displayUserRocks = () => {
        if(userRocks && userRocks.length) {
            return userRocks.map(userRock => <div key={`key-${userRock.id}`} className="border p-5 border-solid hover:bg-fuchsia-500 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">
                {userRock.name} ({userRock.type.label}) weighs {userRock.weight} kg <br /> In the collection of {userRock.user.first_name} {userRock.user.last_name}
            </div>)
        }
        return <h3>Loading Rocks...</h3>
    }

    return (
        <>
            <h1 className="text-3xl">My Rocks</h1>
            {displayUserRocks()}
        </>
    )
}
