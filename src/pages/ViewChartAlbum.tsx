import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ViewChartAlbum.module.css";

const ViewChartAlbum: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPlaylistIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.viewChartAlbum}>
      <img
        className={styles.viewChartAlbumChild}
        alt=""
        src="../rectangle-20@2x.png"
      />
      <img className={styles.logoIcon} alt="" src="../logo1.svg" />
      <div className={styles.viewChartAlbumItem} />
      <img
        className={styles.viewChartAlbumInner}
        alt=""
        src="../rectangle-22@2x.png"
      />
      <img className={styles.leadImageIcon} alt="" src="../leadimage@2x.png" />
      <div className={styles.asVotedByTheCommunityParent}>
        <b className={styles.asVotedBy}>As voted by the community</b>
        <div className={styles.thisIsWeb3ThePowerBelongParent}>
          <div className={styles.thisIsWeb3}>
            This is Web3. The power belongs to the community
          </div>
          <div className={styles.asVotedBy}>64 songs ~ 16 hrs+</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.playParent}>
          <img className={styles.playIcon} alt="" src="../play.svg" />
          <div className={styles.asVotedBy}>Play all</div>
        </div>
        <div className={styles.vuesaxboldmusicSquareAddParent}>
          <img
            className={styles.vuesaxboldmusicSquareAddIcon}
            alt=""
            src="../vuesaxboldmusicsquareadd.svg"
          />
          <div className={styles.asVotedBy}>Add to collection</div>
        </div>
        <div className={styles.heartWrapper}>
          <img className={styles.playIcon} alt="" src="../heart.svg" />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.billing}>Billing</div>
        <div className={styles.single}>Single</div>
        <div className={styles.div}>4:17</div>
        <img className={styles.groupItem} alt="" src="../rectangle-25@2x.png" />
        <img className={styles.heartIcon1} alt="" src="../heart1.svg" />
        <img
          className={styles.moreVerticalIcon}
          alt=""
          src="../morevertical.svg"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.billing}>Watin man go do ~ Burna</div>
        <div className={styles.africanGiant}>African giant</div>
        <div className={styles.div1}>2:30</div>
        <img
          className={styles.groupItem}
          alt=""
          src="../rectangle-251@2x.png"
        />
        <img className={styles.heartIcon1} alt="" src="../heart2.svg" />
        <img
          className={styles.moreVerticalIcon}
          alt=""
          src="../morevertical1.svg"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.standStrong}>Stand strong ~ Davido</div>
        <div className={styles.single}>Single</div>
        <div className={styles.div1}>2:02</div>
        <img
          className={styles.groupItem}
          alt=""
          src="../rectangle-252@2x.png"
        />
        <img className={styles.heartIcon1} alt="" src="../heart2.svg" />
        <img
          className={styles.moreVerticalIcon}
          alt=""
          src="../morevertical1.svg"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
        <div className={styles.standStrong}>Closa ~ Ybee</div>
        <div className={styles.obiDatti}>Obi datti</div>
        <div className={styles.div1}>3:23</div>
        <img
          className={styles.groupItem}
          alt=""
          src="../rectangle-253@2x.png"
        />
        <img className={styles.heartIcon1} alt="" src="../heart2.svg" />
        <img
          className={styles.moreVerticalIcon}
          alt=""
          src="../morevertical1.svg"
        />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild} />
        <div className={styles.billing}>Let me love you ~ Krisx</div>
        <div className={styles.single}>Single</div>
        <div className={styles.div}>4:17</div>
        <img
          className={styles.groupItem}
          alt=""
          src="../rectangle-254@2x.png"
        />
        <img className={styles.heartIcon1} alt="" src="../heart2.svg" />
        <img
          className={styles.moreVerticalIcon}
          alt=""
          src="../morevertical1.svg"
        />
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild} />
        <div className={styles.billing}>Let me love you ~ Krisx</div>
        <div className={styles.single}>Single</div>
        <div className={styles.div}>4:17</div>
        <img
          className={styles.groupItem}
          alt=""
          src="../rectangle-255@2x.png"
        />
        <img className={styles.heartIcon1} alt="" src="../heart2.svg" />
        <img
          className={styles.moreVerticalIcon}
          alt=""
          src="../morevertical1.svg"
        />
      </div>
      <div className={styles.topnav}>
        <div className={styles.searchParent}>
          <img className={styles.playIcon} alt="" src="../search.svg" />
          <div className={styles.search}>Search</div>
        </div>
      </div>
      <div className={styles.appnav}>
        <div className={styles.appnavChild} />
        <div className={styles.homeParent}>
          <img className={styles.homeIcon} alt="" src="../home1.svg" />
          <img
            className={styles.playlistIcon}
            alt=""
            src="../playlist1.svg"
            onClick={onPlaylistIconClick}
          />
          <img className={styles.radioIcon} alt="" src="../radio1.svg" />
          <img className={styles.radioIcon} alt="" src="../videos1.svg" />
        </div>
      </div>
      <div className={styles.personal}>
        <div className={styles.personalChild} />
        <div className={styles.homeParent}>
          <img className={styles.profileIcon} alt="" src="../profile1.svg" />
          <img className={styles.logoutIcon} alt="" src="../logout1.svg" />
        </div>
      </div>
      <div className={styles.musicplayer}>
        <div className={styles.musicplayerChild} />
        <div className={styles.musicplayerItem} />
        <div className={styles.musicplayerInner} />
        <div className={styles.vuesaxboldshuffleParent}>
          <img
            className={styles.vuesaxboldmusicSquareAddIcon}
            alt=""
            src="../vuesaxboldshuffle1.svg"
          />
          <img
            className={styles.vuesaxboldmusicSquareAddIcon}
            alt=""
            src="../vuesaxboldprevious1.svg"
          />
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="../vector1.svg" />
          </div>
          <img
            className={styles.vuesaxboldmusicSquareAddIcon}
            alt=""
            src="../vuesaxboldnext1.svg"
          />
          <img
            className={styles.vuesaxboldmusicSquareAddIcon}
            alt=""
            src="../vuesaxboldrepeateone1.svg"
          />
        </div>
        <img className={styles.groupIcon} alt="" src="../group-21.svg" />
        <img
          className={styles.musicplayerChild1}
          alt=""
          src="../rectangle-151@2x.png"
        />
        <b className={styles.callOfDuty}>Billing</b>
        <b className={styles.zinoleesky}>Sikiboi</b>
        <img
          className={styles.vuesaxboldvolumeHighIcon}
          alt=""
          src="../vuesaxboldvolumehigh.svg"
        />
      </div>
    </div>
  );
};

export default ViewChartAlbum;
