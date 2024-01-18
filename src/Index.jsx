import Guest from './layouts/Guest'
import Post from './pages/users/Post'
// import Card  from './components'
export default function Index() {
    return (
        <Guest>
            <Post />
            <div className="container">
                <div className="row border-bottom mt-5">
                    <h1>Product</h1>
                    <div className="col-md-4">
                    {/* <Card/> */}
                    </div>
                </div>
            </div>
        </Guest>
    )
}
