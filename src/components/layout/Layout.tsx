import BottomBar from './BottomBar'
import TopBar from './Topbar'

const Layout = (props: any) => {
  const { children } = props
  return (
    <div className="h-screen max-h-screen flex flex-col">
      <div className="h-[10%] max-h-[10%] relative">
        <TopBar />
      </div>
      <div className="h-[80%] max-h-[80%]  w-screen relative">{children}</div>
      <div className="h-[10%] max-h-[10%] relative">
        <BottomBar />
      </div>
    </div>
  )
}

export default Layout
