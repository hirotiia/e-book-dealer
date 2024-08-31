import { GloabalNav } from './GlobalNav';
import { HeaderHeadingLogo } from './HeaderHeadingLogo';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/50 shadow-lg backdrop-blur-[20px]">
      <div className="col-start-2 col-end-3 grid grid-cols-2 gap-0">
        <HeaderHeadingLogo />
        <GloabalNav />
      </div>
    </header>
  );
};
