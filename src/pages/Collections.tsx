import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Collections.module.css";

const Collections: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeIconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.collections}>
      <img className={styles.collectionsChild} alt="" src="../ellipse-1.svg" />
      <div className={styles.collectionsItem} />
      <img className={styles.logoIcon} alt="" src="../logo.svg" />
      <div className={styles.appnav}>
        <div className={styles.appnavChild} />
        <div className={styles.homeParent}>
          <img
            className={styles.homeIcon}
            alt=""
            src="../home.svg"
            onClick={onHomeIconClick}
          />
          <img className={styles.playlistIcon} alt="" src="../playlist.svg" />
          <img className={styles.radioIcon} alt="" src="../radio.svg" />
          <img className={styles.radioIcon} alt="" src="../videos.svg" />
        </div>
      </div>
      <div className={styles.personal}>
        <div className={styles.personalChild} />
        <div className={styles.homeParent}>
          <img className={styles.profileIcon} alt="" src="../profile.svg" />
          <img className={styles.logoutIcon} alt="" src="../logout.svg" />
        </div>
      </div>
      <div className={styles.topnav}>
        <div className={styles.searchParent}>
          <img className={styles.searchIcon} alt="" src="../search.svg" />
          <div className={styles.search}>Search</div>
        </div>
      </div>
      <div className={styles.myNftsWrapper}>
        <div className={styles.myNfts}>My NFTs</div>
      </div>
      <div className={styles.collectioncardParent}>
        <div className={styles.collectioncard}>
          <img
            className={styles.collectioncardChild}
            alt=""
            src="../rectangle-26@2x.png"
          />
          <div className={styles.limitsParent}>
            <div className={styles.limits}>Zinoleesky</div>
            <div className={styles.johnWatts} />
          </div>
          <div className={styles.mLikes}>2.3m likes</div>
          <img className={styles.playIcon} alt="" />
        </div>
        <div className={styles.collectioncard}>
          <img
            className={styles.collectioncardChild}
            alt=""
            src="../rectangle-261@2x.png"
          />
          <div className={styles.sikiboiWrapper}>
            <div className={styles.limits}>Sikiboi</div>
          </div>
          <div className={styles.mLikes}>2.3m likes</div>
          <img className={styles.playIcon} alt="" />
        </div>
        <div className={styles.collectioncard}>
          <img
            className={styles.collectioncardInner}
            alt=""
            src="../rectangle-262@2x.png"
          />
          <div className={styles.sikiboiWrapper}>
            <div className={styles.limits}>Jessie Tobiah</div>
          </div>
          <div className={styles.mLikes}>2.3m likes</div>
          <img className={styles.playIcon} alt="" />
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
            src="../vuesaxboldshuffle.svg"
          />
          <img
            className={styles.vuesaxboldshuffleIcon}
            alt=""
            src="../vuesaxboldprevious.svg"
          />
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          </div>
          <img
            className={styles.vuesaxboldshuffleIcon}
            alt=""
            src="../vuesaxboldnext.svg"
          />
          <img
            className={styles.vuesaxboldshuffleIcon}
            alt=""
            src="../vuesaxboldrepeateone.svg"
          />
        </div>
        <img className={styles.groupIcon} alt="" src="../group-2.svg" />
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-15@2x.png"
        />
        <b className={styles.callOfDuty}>Call of duty</b>
        <b className={styles.zinoleesky}>Zinoleesky</b>
        <img
          className={styles.vuesaxboldvolumeHighIcon}
          alt=""
          src="../vuesaxboldvolumehigh.svg"
        />
      </div>
    </div>
  );
};

export default Collections;
