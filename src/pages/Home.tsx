import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPlaylistIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDontKillMe2Click = useCallback(() => {
    navigate("/view-chart-album");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <img className={styles.homeChild} alt="" src="../ellipse-1.svg" />
      <div className={styles.homeItem} />
      <img className={styles.logoIcon} alt="" src="../logo2.svg" />
      <div className={styles.appnav}>
        <div className={styles.appnavChild} />
        <div className={styles.homeParent}>
          <img className={styles.homeIcon} alt="" src="../home2.svg" />
          <img
            className={styles.playlistIcon}
            alt=""
            src="../playlist2.svg"
            onClick={onPlaylistIconClick}
          />
          <img className={styles.radioIcon} alt="" src="../radio2.svg" />
          <img className={styles.radioIcon} alt="" src="../videos2.svg" />
        </div>
      </div>
      <div className={styles.personal}>
        <div className={styles.personalChild} />
        <div className={styles.homeParent}>
          <img className={styles.profileIcon} alt="" src="../profile2.svg" />
          <img className={styles.logoutIcon} alt="" src="../logout2.svg" />
        </div>
      </div>
      <div className={styles.herosectionParent}>
        <div className={styles.herosection}>
          <div className={styles.herosectionChild} />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.musicNfts}>Music NFTs</div>
            <div className={styles.musicOnTheBlockchainParent}>
              <b className={styles.musicOnThe}>Music on the blockchain</b>
              <div className={styles.listenUploadAnd}>
                Listen, upload and earn!
              </div>
            </div>
            <Button className={styles.frameItem} variant="primary">
              33K streams
            </Button>
            <img className={styles.vectorIcon} alt="" src="../vector2.svg" />
            <img
              className={styles.pexelsPhotoByEricEsma}
              alt=""
              src="../pexels-photo-by-eric-esma@2x.png"
            />
          </div>
        </div>
        <b className={styles.newReleases}>New releases.</b>
        <b className={styles.popular}>Popular</b>
        <b className={styles.topMusicNfts}>Top Music NFTs</b>
        <div className={styles.listcontainer}>
          <div className={styles.albumcard}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-14@2x.png"
            />
            <div className={styles.lifeInA}>Blind</div>
            <div className={styles.theVan}>Wiz zee</div>
          </div>
          <div className={styles.albumcard1}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-141@2x.png"
            />
            <div className={styles.lifeInA}>Billing</div>
            <div className={styles.theVan}>Sikiboi</div>
          </div>
          <div className={styles.albumcard2}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-142@2x.png"
            />
            <div className={styles.lifeInA}>Call of duty</div>
            <div className={styles.theVan}>Zinoleesky</div>
          </div>
          <div className={styles.albumcard3}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-143@2x.png"
            />
            <div className={styles.lifeInA}>Limits</div>
            <div className={styles.theVan}>John Dillion</div>
          </div>
          <div className={styles.albumcard4}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-144@2x.png"
            />
            <div className={styles.lifeInA}>Everything’s black</div>
            <div className={styles.theVan}>Ameed</div>
          </div>
          <div className={styles.albumcard5}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-145@2x.png"
            />
            <div className={styles.lifeInA}>Cancelled</div>
            <div className={styles.theVan}>Enimen</div>
          </div>
          <div className={styles.albumcard6}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-146@2x.png"
            />
            <div className={styles.lifeInA}>Nomad</div>
            <div className={styles.theVan}>Makrol eli</div>
          </div>
        </div>
        <div className={styles.listcontainer1}>
          <div className={styles.albumcard}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-147@2x.png"
            />
            <div className={styles.lifeInA}>Blind</div>
            <div className={styles.theVan}>Wiz zee</div>
          </div>
          <div className={styles.albumcard1}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-147@2x.png"
            />
            <div className={styles.lifeInA}>Life in a bubble</div>
            <div className={styles.theVan}>The van</div>
          </div>
          <div className={styles.albumcard2}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-147@2x.png"
            />
            <div className={styles.lifeInA}>Mountain</div>
            <div className={styles.theVan}>Krisx</div>
          </div>
          <div className={styles.albumcard3}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-147@2x.png"
            />
            <div className={styles.lifeInA}>Limits</div>
            <div className={styles.theVan}>John Dillion</div>
          </div>
          <div className={styles.albumcard4}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-147@2x.png"
            />
            <div className={styles.lifeInA}>Everything’s black</div>
            <div className={styles.theVan}>Ameed</div>
          </div>
          <div className={styles.albumcard5}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-147@2x.png"
            />
            <div className={styles.lifeInA}>Cancelled</div>
            <div className={styles.theVan}>Enimen</div>
          </div>
          <div className={styles.albumcard6}>
            <img
              className={styles.albumcardChild}
              alt=""
              src="../rectangle-147@2x.png"
            />
            <div className={styles.lifeInA}>Nomad</div>
            <div className={styles.theVan}>Makrol eli</div>
          </div>
        </div>
        <div className={styles.chartcard}>
          <div className={styles.chartcardChild} />
          <img
            className={styles.chartcardItem}
            alt=""
            src="../rectangle-17@2x.png"
          />
          <div className={styles.dontKillMe}>Don’t kill me</div>
          <div className={styles.jessieTobiah}>Jessie Tobiah</div>
          <img
            className={styles.chartcardInner}
            alt=""
            src="../ellipse-9.svg"
          />
          <img className={styles.heartIcon} alt="" src="../heart7.svg" />
          <div className={styles.div}>2:34:45</div>
        </div>
        <div className={styles.chartcard2}>
          <div className={styles.chartcardChild} />
          <img
            className={styles.chartcardItem}
            alt=""
            src="../rectangle-171@2x.png"
          />
          <div className={styles.dontKillMe}>Smyle</div>
          <div className={styles.jessieTobiah}>Brotherhood</div>
          <img
            className={styles.chartcardInner}
            alt=""
            src="../ellipse-9.svg"
          />
          <img className={styles.heartIcon} alt="" src="../heart7.svg" />
          <div className={styles.div}>1:02:42</div>
        </div>
        <div className={styles.chartcard3}>
          <div className={styles.chartcardChild} />
          <img
            className={styles.chartcardItem}
            alt=""
            src="../rectangle-172@2x.png"
          />
          <div className={styles.dontKillMe2} onClick={onDontKillMe2Click}>
            Leave me alone
          </div>
          <div className={styles.jessieTobiah}>Danny Boy</div>
          <img
            className={styles.chartcardInner}
            alt=""
            src="../ellipse-9.svg"
          />
          <img className={styles.heartIcon} alt="" src="../heart7.svg" />
          <div className={styles.div}>2:01:25</div>
        </div>
      </div>
      <div className={styles.musicplayer}>
        <div className={styles.musicplayerChild} />
        <div className={styles.musicplayerItem} />
        <div className={styles.musicplayerInner} />
        <div className={styles.vuesaxboldshuffleParent}>
          <img
            className={styles.vuesaxboldshuffleIcon}
            alt=""
            src="../vuesaxboldshuffle2.svg"
          />
          <img
            className={styles.vuesaxboldshuffleIcon}
            alt=""
            src="../vuesaxboldprevious2.svg"
          />
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon1} alt="" src="../vector3.svg" />
          </div>
          <img
            className={styles.vuesaxboldshuffleIcon}
            alt=""
            src="../vuesaxboldnext2.svg"
          />
          <img
            className={styles.vuesaxboldshuffleIcon}
            alt=""
            src="../vuesaxboldrepeateone2.svg"
          />
        </div>
        <img className={styles.groupIcon} alt="" src="../group-22.svg" />
        <img
          className={styles.musicplayerChild1}
          alt=""
          src="../rectangle-15@2x.png"
        />
        <b className={styles.callOfDuty}>Call of duty</b>
        <b className={styles.zinoleesky}>Zinoleesky</b>
        <img
          className={styles.vuesaxboldvolumeHighIcon}
          alt=""
          src="../vuesaxboldvolumehigh2.svg"
        />
      </div>
      <div className={styles.topnav}>
        <div className={styles.searchParent}>
          <img className={styles.searchIcon} alt="" src="../search.svg" />
          <div className={styles.search}>Search</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
