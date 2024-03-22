import { IMainLayoutProps } from "./model";

function MainLayout({ className, children }: IMainLayoutProps) {
  return (
    <div className={`border-y-1 border-50 ${className}`}>
      <div className='m-4 mt-2 w-auto'>{children}</div>
    </div>
  );
}

export default MainLayout;
