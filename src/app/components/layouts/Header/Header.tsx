import { GloabalNav } from './GlobalNav';
import { HeaderHeadingLv1 } from './HeaderHeadingLv1';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/50 shadow-lg backdrop-blur-[20px]">
      <div className="col-start-2 col-end-3 grid grid-cols-2 gap-0">
        <HeaderHeadingLv1 />
        <GloabalNav />
      </div>
    </header>
  );
};
