import Link from "next/link";
const NotFound = () => {
    
    return (
        
    <div className="not-found">
        
        <h1 className="my-3 font-medium">Oooppss...</h1>
        <h2 className="my-3 font-medium">That page cannot be found.</h2>
        <p className="my-3 font-medium">Go back to Home <Link href="/">
            <a className="text-xl font-bold md:text-2xl">
          Home Page</a></Link></p>
    </div>

    )
}
export default NotFound;