import { ConnectButton } from "web3uikit";
import { useRouter } from "next/router";
import useWeb3 from "../../utils/useWeb3";
import classes from "../styles/Header.module.css";
import logo from "../../public/logo_datagentdao.jpg";
import Link from "next/link";
import Image from "next/image";
import pushImage from "../../public/push-protocol.jpg";
const Header = () => {
  // const { account } = useMoralis();
  const { chainId, userAccount, Moralis, isWeb3Enabled } = useWeb3();
  const router = useRouter();
  const activeClassName = function (path) {
    return `${classes.link} ${router.pathname == path && classes.active}`;
  };

  console.log(userAccount);
  console.log(chainId);
  console.log(isWeb3Enabled);
  return (
    <div className={classes.header}>
      <Link
        className={classes["logo"]}
        href={"/"}
        style={{ all: "unset", cursor: "pointer" }}
      >
        <div className={classes["logo-container"]}>
          <Image className={classes.logo} src={logo} width={50} height={40} />
          <span>DatAgent DAO</span>
        </div>
      </Link>
      <div className={classes.links}>
        <Link className={activeClassName("/")} href="/">
          Home
        </Link>
        <Link className={activeClassName("/daos")} href="/daos">
          DAOs
        </Link>
        <Link className={activeClassName("/proposals")} href="/proposals">
          Proposals
        </Link>
      </div>
      <div className={classes["connect-button"]}>
        <Image
          className={classes.push}
          src={pushImage}
          alt=""
          width={50}
          height={50}
        />
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
};

export default Header;
