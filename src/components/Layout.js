const Layout = (props) => {
    return (
        <div className="bg-sky-900/40 h-screen w-screen">
            {props.children}
        </div>
    )
}

export default Layout