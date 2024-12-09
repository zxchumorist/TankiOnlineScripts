
/* ТЕМА */
const css = `
.ProBattlesComponentStyle-mainContainer > .Common-flexStartAlignCenterColumn,
.ProBattlesComponentStyle-mainContainer,
.ScrollingCardsComponentStyle-scrollCard {
    animation: opacity 1.5s ease forwards;
}

@keyframes opacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
#modal-root > div > .Common-flexSpaceBetweenAlignStartColumn {
    border-radius: 10px !important;
    backdrop-filter: blur(5px) !important;
    background: radial-gradient(100% 100% at 0% 0%, rgba(254, 38, 74, 0.75) 0%, rgba(255, 38, 74, 0) 100%), rgb(0 0 0 / 75%) !important;
}
.TableComponentStyle-row,
.ClanCommonStyle-rowEmpty {
    border-radius: 10px !important;
}
.ClanCreateComponentStyle-blockCreatureClan {
    backdrop-filter: blur(5px) !important;
    background: radial-gradient(50% 100% at 50% 100%, rgb(0 0 0) 0%, rgb(0 0 0 / 80%) 100%) !important;
}
.PrimaryMenuItemComponentStyle-discountNotification {
    background-color: rgb(243, 166, 131) !important;
}
.PrimaryMenuItemComponentStyle-menuItemContainer:hover div {
	  scale: 1.2;
    background-color: #f3a683;
}
.FooterComponentStyle-containerMenu:hover div {
	  scale: 1.2;
    background-color: #f3a683;
}
.FooterComponentStyle-containerMenu div,
.PrimaryMenuItemComponentStyle-menuItemContainer div {
    transition: scale 300ms ease-in-out, background-color 300ms ease-in-out !important;
    background-color: white;
}
/* Задний фон */
.ClanCommonStyle-content,
.Common-entranceGradient, html, body, .Common-container {
    background: radial-gradient(#252525 0%, #000000 100%);
}
.Common-entranceGradient > .Common-flexStartAlignStartColumn {
    background-color: white !important;
    border: 2px solid black !important;
    border-radius: 10px !important;
}
.StartScreenComponentStyle-text {
    filter: drop-shadow(0 0 3px #f3a683) !important;
}

/* применяем blur */
.JoinToBattleComponentStyle-buttonJoin,
.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin,
.BattleResultNavigationComponentStyle-button,
.BattleRewardsComponentStyle-normalRow, .BattleRewardsComponentStyle-selectedRow,
.BattleResultUserInfoComponentStyle-progressVictoryContainer,
.SettingsComponentStyle-blockContentOptions,
.Common-alignSelfFlexEnd,
.InputComponentStyle-defaultStyle,
.FriendListComponentStyle-containerButtonFriends > .FriendListComponentStyle-buttonAddFriends,
.ButtonComponentStyle-disabled,
.InvitationWindowsComponentStyle-buttonsContainer > .Common-flexCenterAlignCenter {
    border-radius: 10px !important;
}

/* GS */
@keyframes humoristBackground {
    0% {
        background-position: 0% 0%;
    }
    25% {
        background-position: 100% 0%;
    }
    50% {
        background-position: 200% 0%;
    }
    75% {
        background-position: 300% 0%;
    }
    100% {
        background-position: 400% 0%;
    }
}

.GearScoreStyle-bestGS {
    background: linear-gradient(90deg, #f3a683, #f7d794, #778beb, #e77f67, #cf6a87, #c44569, #e15f41, #546de5, #f5cd79, #f19066, #f3a683);
    background-size: 400% 100% !important;
    animation: humoristBackground 8s linear infinite !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}
.MainScreenComponentStyle-playButtonContainer > .Common-backgroundImageContain,
.CheckBoxStyle-checkbox {
    filter: saturate(0);
}
        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            background: #ffffff4d;
            border-radius: 5px;
            outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            border-radius: 20px;
            width: 25px;
            height: 15px;
            background: white;
            cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
            border-radius: 20px;
            width: 25px;
            height: 15px;
            background: white;
            cursor: pointer;
        }

.HotKey-commonBlockForHotKey,
.ProBattlesComponentStyle-createBattleButton h3,
.Common-buttonQE span,
.Common-buttonQE:hover, .Common-buttonQE,
.BreadcrumbsComponentStyle-backButton h3,
.Common-container .HotKey-commonBlockForHotKey,
.BattlePauseMenuComponentStyle-hotKey{
    background-color: white !important;
    border-radius: 360px !important;
    color: black !important;
}

.UserScoreComponentStyle-blockRightPanel > div.Common-flexCenterAlignCenter, .BreadcrumbsComponentStyle-rightButtonsContainer > div.Common-flexCenterAlignCenter {
    width: 6em;
    height: 6em;
    background-color: transparent !important;
}

/* убираем background и background-color там, где они не нужны */
.MainSectionComponentStyle-rightBlock > .Common-flexStartAlignCenter,
.InputComponentStyle-defaultStyle,
.BattleCreateComponentStyle-formNameBattle input[type="text"],
.BattleOptionsSectionComponentStyle-checkBoxSettingsCreateBattle > .Common-flexSpaceBetweenAlignCenter,
.TableComponentStyle-table thead tr th,
.EventBattlePassLobbyComponentStyle-commonBlockProgressBar,
.BattlePassLobbyComponentStyle-blockBattlePass,
.ScrollBarStyle-rightScrollArrow,
.ScrollBarStyle-leftScrollArrow,
.ListItemsComponentStyle-itemsWrapper > .Common-flexCenterAlignCenter,
.ListItemsComponentStyle-itemsListContainer,
.ChatComponentStyle-chatResize,
.ClanInfoComponentStyle-clanActionDescription,
.ContainerInfoComponentStyle-lootBoxDescriptionContainer,
.BattleInfoComponentStyle-customOptions,
.BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter,
.GarageCommonStyle-subMenu > .Common-flexSpaceBetweenAlignStartColumn,
.SettingsComponentStyle-scrollingMenu,
.SuperMissionComponentStyle-gradientBackground,
.BattleModesComponentStyle-fund,
.BattleModesComponentStyle-button > .Common-flexCenterAlignCenter,
.ContainersComponentStyle-leftPane,
.ContainersComponentStyle-rightPane,
.MenuComponentStyle-decorLineMenu,
.MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenterColumn,
.UserScoreComponentStyle-blockRightPanel > div > div.HeaderCommonStyle-icons:hover,
.BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.Common-flexCenterAlignCenter:hover,
.BreadcrumbsComponentStyle-rightButtonsContainer > div.BreadcrumbsComponentStyle-exitGameButton:hover, .BreadcrumbsComponentStyle-rightButtonsContainer > div > div.HeaderCommonStyle-icons:hover, .BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.BreadcrumbsComponentStyle-backButton:hover, .BreadcrumbsComponentStyle-headerContainer > div.Common-flexCenterAlignStart > div.Common-flexStartAlignCenter:hover, .ProBattlesComponentStyle-commonBlockHotkeyV:hover,
.UserInfoContainerStyle-rankIconContainerClickable:hover, .UserScoreComponentStyle-blockRightPanel > div.BreadcrumbsComponentStyle-logout:hover, .MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenterColumn:hover, .MainScreenComponentStyle-containerPanel > .UserInfoContainerStyle-blockLeftPanel > .UserInfoContainerStyle-userTitleContainer > div.Common-flexCenterAlignCenter:hover {
    background: transparent !important;
    background-color: transparent !important;
}

/* убираем border, outline, box-shadow там, где они не нужны */
.MainQuestComponentStyle-colorCardPlay,
.BattleCreateComponentStyle-blockCard > .Common-flexStartAlignStretchColumn > .Common-flexCenterAlignCenterColumn,
.NotificationViewStyle-positionBlock,
.NotificationViewStyle-commonBlockButtonYesNo > .Common-flexCenterAlignCenter,
.ClanStatisticsComponentStyle-areCommon,
.ClanHeaderComponentStyle-blockInform,
.ClanInfoComponentStyle-messageClan,
.TableComponentStyle-tBody tr,
.ConverterDialogComponentStyle-modal,
.BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn,
.BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn,
.BattleCreateComponentStyle-scrollBattlePick > .SkinsComponentStyle-styleColumn > .SkinCellStyle-widthHeight,
.MainQuestComponentStyle-cardPlayCommon,
.MainQuestComponentStyle-cardRewardGiven,
.MainQuestComponentStyle-cardRewardCompleted,
.BattleResultQuestProgressComponentStyle-container,
.ContractCardComponentStyle-card,
.TableMainQuestComponentStyle-cardLockedTable,
.MainQuestComponentStyle-cardPlay,
.SuperMissionComponentStyle-conditionContextItems,
.BattlePauseMenuDialogComponentStyle-wrapper,
.BattlePauseMenuComponentStyle-menuButton,
.BattlePauseMenuComponentStyle-redMenuButton,
.ContextMenuStyle-menu,
.ProBattlesComponentStyle-table > .TableComponentStyle-tBody > .Common-flexWrapNowrap,
.SettingsComponentStyle-scrollCreateBattle,
.MainSectionComponentStyle-commonBlockCheckBoxCreateBattle,
.BattleOptionsSectionComponentStyle-checkBoxSettingsCreateBattle > .Common-flexSpaceBetweenAlignCenter,
.InputComponentStyle-defaultStyle,
.BattleCreateComponentStyle-formNameBattle input[type="text"],
.SearchInputComponentStyle-searchInput > .Font-normal,
.FriendListComponentStyle-buttonCloseAddFriends,
.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .Common-whiteSpaceNoWrap,
.FriendListComponentStyle-stringCommunity > .FriendListComponentStyle-blockList,
.TankParametersStyle-marginBlockGear,
.TankParametersStyle-parametersBlockGear,
.ChatComponentStyle-upMenu > .ChatComponentStyle-channels > .ChatComponentStyle-channelsSelect > .ChatComponentStyle-channelSelect,
.ChatComponentStyle-chatWindow,
.ItemDescriptionComponentStyle-commonBlockModal, .TutorialModalComponentStyle-contentWrapper, .SaleByKitStyle-commonBlockModal, .NewsComponentStyle-newsWindow,
.PaintsCollectionComponentStyle-captionPaint > .Common-backgroundImageContain,
.GarageCommonStyle-animatedBlurredLeftBlock > :nth-child(2),
.TanksPartComponentStyle-tankPartUpgrades,
.Common-flexCenterAlignCenter,
.DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter,
.SkinsIconComponentStyle-cellSkins > .Common-flexCenterAlignCenter,
.ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice,
.ListItemsComponentStyle-itemsContainer > .Common-flexSpaceBetweenAlignCenterColumn > .Common-itemStyle,
.MountedItemsStyle-commonBlockGrenades, .MountedItemsStyle-commonBlockDrone, .MountedItemsStyle-commonBlockForTurretsHulls, .TankParametersStyle-leftParamsContainer, .SuppliesComponentStyle-cellAdd,
.ReceivedRewardsComponentStyle-rewards > .ReceivedRewardsComponentStyle-stringRewards > div, .AnimationOpenContainerComponentStyle-rewardContainer, .ContainerInfoComponentStyle-itemsContainer > .Common-flexStartAlignStretchColumn > div, .ContainersComponentStyle-rewards > div,
.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock,
.ItemDescriptionComponentStyle-descriptionBlockDevice > .ContainersComponentStyle-description,
.UserProgressComponentStyle-progressLegendPlus,
.UserProgressComponentStyle-itemContainer,
.UserProgressComponentStyle-progressItemCompleted,
.UserProgressComponentStyle-rankGainedIndicator,
.ModalStyle-rootHover > .Common-displayFlex > .Common-flexCenterAlignCenterColumn,
.ModalStyle-rootHover > .Common-displayFlex,
.KeyboardSettingsComponentStyle-buttonResetAllKeys,
.KeyMappingWithIconComponentStyle-noNameKey,
.KeyboardSettingsComponentStyle-keyInput,
.KeyMappingWithIconComponentStyle-overdrives,
.KeyMappingWithIconComponentStyle-commonBlockSupplies,
.VerticalScrollStyle-outerContainerStyle,
.DropDownStyle-dropdownControl,
.TooltipStyle-tooltip,
.FooterComponentStyle-containerMenu,
.MainScreenComponentStyle-playButtonContainer,
.AnnouncementHomeScreenComponentStyle-mainContainer,
.PrimaryMenuItemComponentStyle-menuItemContainer,
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass,
.BattlePassLobbyComponentStyle-commonDescription,
.BattlePassLobbyComponentStyle-blockBattlePass,
.BattlePassLobbyComponentStyle-menuBattlePass,
.BreadcrumbsComponentStyle-backButton,
.MainScreenComponentStyle-containerPanel, .MainScreenComponentStyle-containerPanel *,
.BreadcrumbsComponentStyle-headerContainer, .BreadcrumbsComponentStyle-headerContainer *,
.BattleResultNavigationComponentStyle-commonBlockBattleResultNavigation,
.TankBuilderHeaderComponentStyle-headerWrapper *,
.TankBuilderHeaderComponentStyle-headerWrapper,
.MatchmakingWaitComponentStyle-cancelButton,
.QuestsChallengesComponentStyle-maxTierBlockEvent,
.DialogContainerComponentStyle-container,
.BattlePauseMenuComponentStyle-enabledButton,
.ScrollingCardsComponentStyle-selectCard,
.AnnouncementHomeScreenComponentStyle-mainContainer,
.ProBattlesComponentStyle-commonBlockHotkeyV,
.SuperMissionComponentStyle-descriptionSuperMission,
.Common-flexSpaceBetweenAlignStartColumn,
.QuestsChallengesComponentStyle-maxTierBlock,
.ProBattlesComponentStyle-rightPanel,
.ProBattlesComponentStyle-borderLineCell,
.InvitationWindowsComponentStyle-commonBorder,
.InvitationWindowsComponentStyle-commonBlockButton,
.InvitationWindowsComponentStyle-commonBlockButton:hover,
.BattleInfoComponentStyle-invite,
.BattleInfoComponentStyle-customOptions,
.ProBattlesComponentStyle-createBattleButton,
.BattleModesComponentStyle-button,
.ContainersComponentStyle-navigationBlockForCategories,
.BattleModesComponentStyle-fund:hover,
.ContainerInfoComponentStyle-lootBoxDescriptionContainer,
.ProBattlesComponentStyle-navigationBlock,
.ProBattlesComponentStyle-mainContainer > .Common-flexStartAlignCenterColumn > .Common-flexStartAlignStartColumn, .ProBattlesComponentStyle-mainContainer > .Common-flexStartAlignCenterColumn {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
}

/* применяем transition: background-color 0.2s linear; */
.MainQuestComponentStyle-colorCardPlay,
.ClanCommonStyle-row,
.BattleCreateComponentStyle-blockCard > .Common-flexStartAlignStretchColumn > .Common-flexCenterAlignCenterColumn,
.NotificationViewStyle-commonBlockButtonYesNo > .Common-flexCenterAlignCenter,
.InvitationWindowsComponentStyle-commonBorder,
.BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn,
.BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn,
.BattleCreateComponentStyle-scrollBattlePick > .SkinsComponentStyle-styleColumn > .SkinCellStyle-widthHeight,
.MainQuestComponentStyle-cardPlayCommon,
.MainQuestComponentStyle-cardRewardCompleted,
.BattleResultQuestProgressComponentStyle-container,
.ContractCardComponentStyle-card,
.TableMainQuestComponentStyle-cardLockedTable,
.MainQuestComponentStyle-cardPlay,
.BattlePauseMenuComponentStyle-menuButton,
.BattlePauseMenuComponentStyle-redMenuButton,
.ContextMenuStyle-menu > .Common-flexStartAlignCenter,
.JoinToBattleComponentStyle-buttonJoin,
#root > div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div.Common-flexStartAlignStretchColumn > div.Common-flexStartAlignCenter > div,
.UsersTableStyle-rowBattle > .UsersTableStyle-cellNameDM, .UsersTableStyle-rowBattle,
.ProBattlesComponentStyle-table > .TableComponentStyle-tBody > .Common-flexWrapNowrap,
.BattleModesComponentStyle-blockModesFilter > .Common-flexCenterAlignCenter,
.MainSectionComponentStyle-commonBlockCheckBoxCreateBattle,
.BattleHudComponentStyle-tabButton, .BattleHudComponentStyle-pauseButton, .BattleHudComponentStyle-fullScreenButton,
.ProBattlesComponentStyle-createBattleButton,
.SearchInputComponentStyle-searchInput > .Font-normal,
.FriendListComponentStyle-buttonCloseAddFriends,
.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .Common-whiteSpaceNoWrap,
.FriendListComponentStyle-stringCommunity > .FriendListComponentStyle-blockList,
.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin,
.ChatComponentStyle-upMenu > .ChatComponentStyle-channels > .ChatComponentStyle-channelsSelect > .ChatComponentStyle-channelSelect,
.PaintsCollectionComponentStyle-commonBlockPaint > .Common-flexCenterAlignCenter,
.PaintsCollectionComponentStyle-captionPaint > .Common-backgroundImageContain,
.TanksPartComponentStyle-tankPartUpgrades > .SquarePriceButtonComponentStyle-commonBlockButton,
.GarageSuppliesComponentStyle-containerButtons > .SquarePriceButtonComponentStyle-commonBlockButton,
.TanksPartBaseComponentStyle-buttonsContainer > .SquarePriceButtonComponentStyle-commonBlockButton,
.Common-boxShadowForButton,
.DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter,
.SkinsIconComponentStyle-cellSkins > .Common-flexCenterAlignCenter,
.ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice,.ListItemsComponentStyle-itemsContainer > .Common-flexSpaceBetweenAlignCenterColumn > .Common-itemStyle,.GarageProtectionsComponentStyle-equipmentResistance.GarageProtectionsComponentStyle-mountedResistActive,
.GarageProtectionsComponentStyle-equipmentResistance.GarageProtectionsComponentStyle-mountedResist,
.MountedItemsStyle-commonForCellResistenceName,
.MountedItemsStyle-commonBlockGrenades, .MountedItemsStyle-commonBlockDrone, .MountedItemsStyle-commonBlockForTurretsHulls, .TankParametersStyle-leftParamsContainer, .SuppliesComponentStyle-cellAdd,.ContainersComponentStyle-rewards > div,.ContainerInfoComponentStyle-itemsContainer > .Common-flexStartAlignStretchColumn > div,.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock,.ItemDescriptionComponentStyle-descriptionBlockDevice > .ContainersComponentStyle-description,.UserProgressComponentStyle-progressItemCompleted,.KeyboardSettingsComponentStyle-buttonResetAllKeys,.KeyMappingWithIconComponentStyle-noNameKey,.KeyboardSettingsComponentStyle-keyInput,.KeyMappingWithIconComponentStyle-overdrives,.KeyMappingWithIconComponentStyle-commonBlockSupplies,.DropDownStyle-innerContainerStyle > div > .Common-flexStartAlignCenter,.DropDownStyle-dropdownControl,.MainScreenComponentStyle-playButtonContainer,.BattlePassLobbyComponentStyle-menuBattlePass,.EventBattlePassLobbyComponentStyle-buttonEventBattlePass,.AnnouncementHomeScreenComponentStyle-announceContainer,.PrimaryMenuItemComponentStyle-menuItemContainer,.FooterComponentStyle-containerMenu {
	transition: background-color 0.2s linear, background 0.2s linear !important;
}

/* Выбор в про битвах */
.BattleResultUserInfoComponentStyle-progressVictoryContainer {
    background-color: #00000026;
}
.BattleRewardsComponentStyle-normalRow,
.BattleRewardsComponentStyle-selectedRow {
    background: linear-gradient(90deg, #00000026 50%, #ff335580 100%);
}
.BattleInfoComponentStyle-commonBlockSelectedOptionsSettings {
    background: linear-gradient(0deg, #ffffff00 0%, rgb(0 0 0) 100%) !important;
    backdrop-filter: blur(5px) !important;
}
.UsersTableStyle-rowBattleEmpty {
    backdrop-filter: blur(5px);
    border-radius: 10px !important;
    background-color: rgb(0 0 0 / 10%);
}
.BattleModesComponentStyle-blockModesFilter > .Common-flexCenterAlignCenter > .Common-maskImageContain {
    transform: translateX(-50%) !important;
    left: 50% !important;
}
.BattleModesComponentStyle-blockModesFilter > .Common-flexCenterAlignCenter p {
    display: none !important;
}
.BattleModesComponentStyle-button > .Common-flexCenterAlignCenter div {
    filter: saturate(0) !important;
}
.ProBattlesComponentStyle-table > .TableComponentStyle-tBody > .Common-flexWrapNowrap {
    width: 99% !important;
}
.FormatsSectionComponentStyle-card >.Common-flexCenterAlignCenterColumn {
    background: transparent !important;
    border: none !important;
}
.ProBattlesComponentStyle-createBattleButton {
    scale: 0.9 !important;
}
.BattlePickComponentStyle-cardImgEvent,
.Common-backgroundImageCover {
    transform: none !important;
}
.ProBattlesComponentStyle-mainContainer > .Common-flexStartAlignCenterColumn {
    background-color: transparent !important;
}
.BattleModesComponentStyle-blockModesFilter .Common-flexCenterAlignCenter:hover {
    box-shadow: none !important;
}
.MapCardComponentStyle-linearGradient {
    border-radius: 10px !important;
}
.BattleCardComponentStyle-line {
    background-color: transparent !important;
}
.FormatsSectionComponentStyle-card:hover,
.BattlePickComponentStyle-commonStyleBlock:hover,
.ScrollingCardsComponentStyle-scrollCard:hover,
.BattleCreateComponentStyle-blockCard .Common-flexStartAlignStretchColumn .Common-backgroundImageCover:hover, .Common-backgroundImageCover.modeLimitIcon:hover {
    transform: scale(0.985) !important;
    background-color: black !important;
    box-shadow: white 0em 0em 0em 2px !important;
}
.FormatsSectionComponentStyle-card,
.BattlePickComponentStyle-commonStyleBlock,
.ScrollingCardsComponentStyle-scrollCard,
.BattleCreateComponentStyle-blockCard .Common-flexStartAlignStretchColumn .Common-backgroundImageCover,
.Common-backgroundImageCover.modeLimitIcon {
    transition: transform 0.2s linear, box-shadow 0.2s linear !important;
    box-shadow: black 0em 0em 0em 2px !important;
    border-radius: 10px !important;
    background-color: black !important;
}
.MainSectionComponentStyle-linearGradientImgCard {
    border-radius: 10px !important;
}
.BattleInfoComponentStyle-selectBattle {
    display: none !important;
}
.ContextMenuStyle-menuItemRank {
    visibility: hidden !important;
    height: 0px !important;
}
.AnnouncementHomeScreenComponentStyle-headerTimer {
background-color: white !important;
}
.MainScreenComponentStyle-playButtonContainer h3 {
    color: #f3a683 !important;
}

/* Containers1 */
.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock:hover,
.ItemDescriptionComponentStyle-descriptionBlockDevice > .ContainersComponentStyle-description:hover, {
    background: #25252580 !important;
}
.ContainersComponentStyle-infoPanel > .ContainersComponentStyle-possibleRewardsBlock,
.ItemDescriptionComponentStyle-descriptionBlockDevice > .ContainersComponentStyle-description {
    backdrop-filter: blur(5px) !important;
    background: #00000080 !important;
    border-radius: 10px !important;
}
.MenuComponentStyle-battleTitleCommunity span {
    filter: none !important;
    text-shadow: none !important;
    background-color: transparent !important;
}
.Common-activeMenu > .Common-menuItemActive {
    background-color: #f3a683 !important;
    box-shadow: #f3a683 0px 0px 5px 0px !important;
    filter: drop-shadow(0 0 2px #f3a683) !important;
}
.Common-activeMenu {
    color: #f3a683 !important;
    filter: drop-shadow(0 0 2px #f3a683) !important;
}
.MenuComponentStyle-mainMenuItem:hover {
    color: #f3a683 !important;
}
.MenuComponentStyle-mainMenuItem {
    color: white !important;
}
.AnimationOpenContainerComponentStyle-rewardContainer > .Common-flexCenterAlignCenterColumn {
    background: transparent;
    box-shadow: unset;
}
.ReceivedRewardsComponentStyle-rewards > .ReceivedRewardsComponentStyle-stringRewards > div, .AnimationOpenContainerComponentStyle-rewardContainer, .ContainerInfoComponentStyle-itemsContainer > .Common-flexStartAlignStretchColumn > div, .ContainersComponentStyle-rewards > div {
    backdrop-filter: blur(5px) !important;
    background: #00000080 !important;
    border-radius: 10px !important;
}
.ContainersComponentStyle-rewards > div:hover,
.ContainerInfoComponentStyle-itemsContainer > .Common-flexStartAlignStretchColumn > div:hover {
    background: #25252580 !important;
}

/* garage */
.FriendListComponentStyle-containerButtonFriends > .FriendListComponentStyle-buttonAddFriends {
    border-radius: 10px !important;
}
.GarageMainScreenStyle-blockParameters > div > .CssCommonAnimations-appearFromLeft {
    top: 17em !important;
    bottom: unset !important;
}
.SuppliesComponentStyle-decorLine {
    background: transparent !important;
}
.SuppliesComponentStyle-screenShotButtonOpen {
    filter: drop-shadow(0 0 3px #f3a683) !important;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA20lEQVR4nO2UQQrCQAxF/zG0XshqS0/gzl3BpXUlggheqrZn0RPYunFjZeALIslgzbjSQDb56X/TJh3gF2IBoFNyaTWfAbh5AE6bv2s2AXBSjHKhP1d6nUcsATTzjedQa+WZo9T8EK3RaT4+QAagBnBhVgDSUIC9Z8g7KyBj7cqVjJgFa05LLICaNWf4GgW1gwXQsjYU+gfUmhCASOgfUTtbAJXnE62olRZA+jTkQhny1AIAV1Fb0y0C/WgJt6VllsLJTYA+ofpol133QYqXXUwhhPm41zv/A9+MO74ysZQOexG2AAAAAElFTkSuQmCC") !important;
    width: 2em;
    height: 2em;
}
.TanksPartComponentStyle-tankPartUpgrades {
    background-color: transparent !important;
}
.TanksPartBaseComponentStyle-buttonsContainer > .SquarePriceButtonComponentStyle-commonBlockButton:hover {
    background-color: #25252580;
}
.TanksPartBaseComponentStyle-buttonsContainer > .SquarePriceButtonComponentStyle-commonBlockButton {
    background-color: #00000080;
    backdrop-filter: blur(5px) !important;
    border-radius: 10px !important;
}
.GarageCommonStyle-animatedBlurredLeftBlock, .GarageCommonStyle-animatedBlurredRightBlock {
    backdrop-filter: none !important;
}
.PaintsCollectionComponentStyle-captionPaint > .Common-backgroundImageContain {
    content: url(/play/static/images/info.78c2fe48.svg);
    transform: scale(0.4);
    padding: 15px;
}
#root > div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div.Common-flexStartAlignStretchColumn > div.Common-flexStartAlignCenter > div {
   backdrop-filter: blur(5px) !important;
   border-radius: 10px !important;
}
.MainQuestComponentStyle-colorCardPlay {
    backdrop-filter: blur(5px) !important;
    background: #25252580 !important;
    border-radius: 10px !important;
}
.MainQuestComponentStyle-colorCardPlay:hover {
    background: #00000080 !important;
}

.ClanCommonStyle-row,
.BattleCreateComponentStyle-blockCard > .Common-flexStartAlignStretchColumn > .Common-flexCenterAlignCenterColumn,
.NotificationViewStyle-commonBlockButtonYesNo > .Common-flexCenterAlignCenter,
.BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn,
.BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn,
.BattleCreateComponentStyle-scrollBattlePick > .SkinsComponentStyle-styleColumn > .SkinCellStyle-widthHeight,
.MainQuestComponentStyle-cardPlayCommon,
.BattleResultQuestProgressComponentStyle-container,
.ContractCardComponentStyle-card,
.TableMainQuestComponentStyle-cardLockedTable,
.MainQuestComponentStyle-cardPlay,
.UsersTableStyle-rowBattle > .UsersTableStyle-cellNameDM, .UsersTableStyle-rowBattle,
.ProBattlesComponentStyle-table > .TableComponentStyle-tBody > .Common-flexWrapNowrap,
.BattleModesComponentStyle-blockModesFilter > .Common-flexCenterAlignCenter,
.MainSectionComponentStyle-commonBlockCheckBoxCreateBattle,
.ProBattlesComponentStyle-createBattleButton,
.SearchInputComponentStyle-searchInput > .Font-normal,
.FriendListComponentStyle-buttonCloseAddFriends,
.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .Common-whiteSpaceNoWrap,
.FriendListComponentStyle-stringCommunity > .FriendListComponentStyle-blockList,
.PaintsCollectionComponentStyle-commonBlockPaint > .Common-flexCenterAlignCenter,
.PaintsCollectionComponentStyle-captionPaint > .Common-backgroundImageContain,
.TanksPartComponentStyle-tankPartUpgrades > .SquarePriceButtonComponentStyle-commonBlockButton,
.GarageSuppliesComponentStyle-containerButtons > .SquarePriceButtonComponentStyle-commonBlockButton,
.Common-boxShadowForButton,
.DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter,
.SkinsIconComponentStyle-cellSkins > .Common-flexCenterAlignCenter,
.ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice,
.ListItemsComponentStyle-itemsContainer > .Common-flexSpaceBetweenAlignCenterColumn > .Common-itemStyle,
.MountedItemsStyle-commonBlockGrenades, .MountedItemsStyle-commonBlockDrone, .MountedItemsStyle-commonBlockForTurretsHulls, .TankParametersStyle-leftParamsContainer, .SuppliesComponentStyle-cellAdd {
    backdrop-filter: blur(5px) !important;
    background: #00000080 !important;
    border-radius: 10px !important;
}
.ClanCommonStyle-row:hover,
.BattleCreateComponentStyle-blockCard > .Common-flexStartAlignStretchColumn > .Common-flexCenterAlignCenterColumn:hover,
.NotificationViewStyle-commonBlockButtonYesNo > .Common-flexCenterAlignCenter:hover,
.BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardContentUp > .Common-flexSpaceBetweenAlignCenterColumn:hover,
.BattleModesComponentStyle-cardContentRight > .BattleModesComponentStyle-cardDown > .Common-flexSpaceBetweenAlignCenterColumn:hover,
.BattleCreateComponentStyle-scrollBattlePick > .SkinsComponentStyle-styleColumn > .SkinCellStyle-widthHeight:hover,
.MainQuestComponentStyle-cardPlayCommon:hover,
.BattleResultQuestProgressComponentStyle-container:hover,
.ContractCardComponentStyle-card:hover,
.TableMainQuestComponentStyle-cardLockedTable:hover,
.MainQuestComponentStyle-cardPlay:hover,
.JoinToBattleComponentStyle-buttonJoin:hover,
#root > div > div.ProBattlesComponentStyle-mainContainer > div.Common-flexStartAlignCenterColumn > div.Common-flexStartAlignStretchColumn > div.Common-flexStartAlignCenter > div:hover,
.UsersTableStyle-rowBattle > .UsersTableStyle-cellNameDM:hover, .UsersTableStyle-rowBattle:hover,
.ProBattlesComponentStyle-table > .TableComponentStyle-tBody > .Common-flexWrapNowrap:hover,
.BattleModesComponentStyle-blockModesFilter > .Common-flexCenterAlignCenter:hover,
.MainSectionComponentStyle-commonBlockCheckBoxCreateBattle:hover,
.ProBattlesComponentStyle-createBattleButton:hover,
.SearchInputComponentStyle-searchInput > .Font-normal:hover,
.FriendListComponentStyle-buttonCloseAddFriends:hover,
.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .Common-whiteSpaceNoWrap:hover,
.FriendListComponentStyle-stringCommunity > .FriendListComponentStyle-blockList:hover,
.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-newButtonJoinA.JoinToBattleComponentStyle-buttonJoin:hover,
.PaintsCollectionComponentStyle-commonBlockPaint > .Common-flexCenterAlignCenter:hover,
.PaintsCollectionComponentStyle-captionPaint > .Common-backgroundImageContain:hover,
.TanksPartComponentStyle-tankPartUpgrades > .SquarePriceButtonComponentStyle-commonBlockButton:hover,
.GarageSuppliesComponentStyle-containerButtons > .SquarePriceButtonComponentStyle-commonBlockButton:hover,
.Common-boxShadowForButton:hover,
.DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter:hover,
.SkinsIconComponentStyle-cellSkins > .Common-flexCenterAlignCenter:hover,
.ItemDescriptionComponentStyle-descriptionBlockDevice > .ItemDescriptionComponentStyle-captionDevice:hover,
.ListItemsComponentStyle-itemsContainer > .Common-flexSpaceBetweenAlignCenterColumn > .Common-itemStyle:hover,
.MountedItemsStyle-commonBlockGrenades:hover, .MountedItemsStyle-commonBlockDrone:hover, .MountedItemsStyle-commonBlockForTurretsHulls:hover, .TankParametersStyle-leftParamsContainer:hover, .SuppliesComponentStyle-cellAdd:hover {
    background: #25252580 !important;
}
.GarageProtectionsComponentStyle-equipmentResistance.GarageProtectionsComponentStyle-mountedResistActive,
.GarageProtectionsComponentStyle-equipmentResistance.GarageProtectionsComponentStyle-mountedResist,
.MountedItemsStyle-commonForCellResistenceName {
    background: #00000080 !important;
    border-radius: 10px !important;
}
.GarageProtectionsComponentStyle-equipmentResistance.GarageProtectionsComponentStyle-mountedResistActive:hover,
.GarageProtectionsComponentStyle-equipmentResistance.GarageProtectionsComponentStyle-mountedResist:hover,
.MountedItemsStyle-commonForCellResistenceName:hover {
    background: #25252580 !important;
}


/* прогресс */
.UserProgressComponentStyle-progressLegendPlusImage {
    opacity: 0.5 !important;
}
.UserProgressComponentStyle-progressLegendPlusGradient {
    background: transparent !important;
    border-radius: 10px !important;
}
.UserProgressComponentStyle-itemContainer {
    backdrop-filter: blur(5px) !important;
    background-color: #25252580 !important;
    border-radius: 10px !important;
}
.UserProgressComponentStyle-modalWrapper {
    backdrop-filter: blur(5px) !important;
    background: #00000080 !important;
}
.UserProgressComponentStyle-progressLegendPlusGradient > .Common-flexCenterAlignCenter {
    filter: drop-shadow(0 0 3px #f3a683) !important;
    color: #f3a683 !important;
    text-shadow: none !important;
}
.UserProgressComponentStyle-rankProgressBarGained {
    filter: drop-shadow(0 0 2px #f3a683) !important;
    border-top: 4px solid #f3a683 !important;
}
.UserProgressComponentStyle-progressItemCompleted:hover > :nth-child(2) {
    margin-top: unset !important;
}
.UserProgressComponentStyle-progressItemCompleted:hover {
    background: #25252580 !important;
}
.UserProgressComponentStyle-progressItemCompleted {
    background: #00000080 !important;
    backdrop-filter: blur(5px) !important;
    border-radius: 10px !important;
}
.UserProgressComponentStyle-rankProgressBarContainerLegend {
    border-top: 4px solid #ffffff4d !important;
}

/* Premium */
.ModalStyle-rootHover > .Common-displayFlex {
    background: #00000080 !important;
    backdrop-filter: blur(5px) !important;
    border-radius: 10px !important;
}

/* LobbyLoader */
.LobbyLoaderComponentStyle-container {
    backdrop-filter: blur(5px) !important;
    background: #00000080 !important;
}
.LobbyLoaderComponentStyle-loaderContainer {
    display: none !important;
}
.LobbyLoaderComponentStyle-logo {
  animation: logoAnim 1s linear infinite;
  animation-fill-mode: both;
  position: relative;
}
@keyframes logoAnim {
  0% {
    filter: drop-shadow(0 0 30px white);
    transform: scale(0.8);
    opacity: 0;
  }
  20% {
    opacity: 0.5;
  }
  40% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    filter: drop-shadow(0 0 5px #f3a683);
    transform: scale(1);
    opacity: 0;
  }
}

/* Keys */
.ContextMenuStyle-menu > .Common-flexStartAlignCenter:hover, .DropDownStyle-innerContainerStyle > div > .Common-flexStartAlignCenter:hover {
    background-color: #25252580 !important;
    border-radius: 10px !important;
}
.KeyboardSettingsComponentStyle-buttonResetAllKeys:hover {
    background-color: #25252580 !important;
}
.KeyboardSettingsComponentStyle-buttonResetAllKeys {
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    border-radius: 10px !important;
}
.KeyMappingWithIconComponentStyle-noNameKey:hover {
    background-color: #6400004d !important;
}
.KeyMappingWithIconComponentStyle-noNameKey {
    backdrop-filter: blur(5px) !important;
    background-color: #5a00004d !important;
    border-radius: 10px !important;
}
.KeyboardSettingsComponentStyle-keyInput:hover,
.KeyMappingWithIconComponentStyle-overdrives:hover,
.KeyMappingWithIconComponentStyle-commonBlockSupplies:hover {
    background-color: #25252580 !important;
}
.KeyboardSettingsComponentStyle-keyInput,
.KeyMappingWithIconComponentStyle-overdrives,
.KeyMappingWithIconComponentStyle-commonBlockSupplies {
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    border-radius: 10px !important;
}


/* InputRangeComponent */
.InputRangeComponentStyle-blockSoundVolume p span {
    filter: drop-shadow(0 0 2px #f3a683) !important;
    color: #f3a683 !important;
}

/* Settings */
.SettingsComponentStyle-scrollingMenu {
    scrollbar-color: white transparent !important;
}
.SettingsMenuComponentStyle-yellowLineMenuOptions {
    background-color: #f3a683 !important;
    box-shadow: #f3a683 0px 0px 5px 0px !important;
    border-radius: 10px !important;
}
.SettingsMenuComponentStyle-slideMenuOptions {
    background: linear-gradient(to right, #2d2d2d, transparent) !important;
}

/* DropDown */
.DropDownStyle-dropdownControl:hover {
    background-color: #25252580 !important;
}
.DropDownStyle-dropdownControl {
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    border-radius: 10px !important;
}
.ContextMenuStyle-menu > .Common-flexStartAlignCenter:hover,
.DropDownStyle-innerContainerStyle > div > .Common-flexStartAlignCenter:hover {
    background: #25252580 !important;
}
.ContextMenuStyle-menu > .Common-flexStartAlignCenter,
.DropDownStyle-innerContainerStyle > div > .Common-flexStartAlignCenter {
    background: transparent !important;
    border-radius: 10px !important;
}
.VerticalScrollStyle-outerContainerStyle {
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    border-radius: 10px !important;
    scrollbar-color: white transparent !important;
}
.ContextMenuStyle-menu {
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    border-radius: 10px !important;
}

/* Tool */
.TooltipStyle-tooltip {
    background-color: #00000080 !important;
    border-radius: 10px !important;
    backdrop-filter: blur(5px) !important;
}

/* прогресс звания */
.UserProgressComponentStyle-rankScore,
.UserProgressComponentStyle-rankProgressLegend,
.AccountSettingsComponentStyle-blockTextOptions h1 {
    filter: drop-shadow(0 0 2px #f3a683) !important;
    color: #f3a683 !important;
}
.UserProgressComponentStyle-xpIcon,
.UserInfoContainerStyle-xpIcon,
.UserInfoContainerStyle-progressValue {
    filter: saturate(0) !important;
}
.UserInfoContainerStyle-containerProgressMainScreen > .Common-flexStartAlignStartColumn {
    background-color: #ffffff4d !important;
}
.UserInfoContainerStyle-containerProgressMainScreen > .Common-flexStartAlignStartColumn::after {
    filter: drop-shadow(0 0 2px #f3a683) !important;
    background-color: #f3a683 !important;
}

/* Footer */
.FooterComponentStyle-containerMenu:hover {
    background-color: #25252580 !important;
}
.FooterComponentStyle-containerMenu {
    margin: 0px 2px !important;
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    border-radius: 360% !important;
}

/* Кнопка играть */
.MainScreenComponentStyle-playButtonContainer:hover {
    background-color: #25252580 !important;
}
.MainScreenComponentStyle-playButtonContainer {
    background-image: none !important;
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
}
.MainScreenComponentStyle-playButtonContainer span {
    color: white !important;
}

/* чат в главном меню и тд */
.ChatComponentStyle-chatWindow {
	background: #00000080 !important;
    backdrop-filter: blur(5px) !important;
	border-radius: 10px !important;
    align-self: center !important;
    position: absolute !important;
    right: unset !important;
    height: 80% !important;
    top: 7em !important;
}
.ItemDescriptionComponentStyle-commonBlockModal, .TutorialModalComponentStyle-contentWrapper, .SaleByKitStyle-commonBlockModal, .NewsComponentStyle-newsWindow {
    animation: unset !important;
    background: #00000080 !important;
    backdrop-filter: blur(5px) !important;
    margin: 7em 0em 0em 0em !important;
    height: 50em !important;
    transform: translateX(50%);
    right: 50% !important;
    border-radius: 10px !important;
    left: unset !important;
}
.TutorialModalComponentStyle-backgroundClickArea {
    background-color: #25252580 !important;
}
.ChatComponentStyle-upMenu > .ChatComponentStyle-channels > .ChatComponentStyle-channelsSelect > .ChatComponentStyle-channelSelect:hover {
    background-color: #25252580 !important;
}
.ChatComponentStyle-upMenu > .ChatComponentStyle-channels > .ChatComponentStyle-channelsSelect > .ChatComponentStyle-channelSelect {
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    border-radius: 10px !important;
}
.NewsComponentStyle-header,
.ChatComponentStyle-upMenu {
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
}
.ChatComponentStyle-closeArea,
.NewsComponentStyle-closeArea {
    background-color: transparent !important;
}
.ChatComponentStyle-chatResize {
	    border-radius: 20px !important;
	    top: 1em !important;
	    height: 97% !important;
}
.ClanCreateComponentStyle-containerButtons {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

/* Primary */
.PrimaryMenuItemComponentStyle-discountNotification {
    width: 1.25em !important;
}
.PrimaryMenuItemComponentStyle-menuItemContainer:hover {
    background-color: #25252580 !important;
}
.PrimaryMenuItemComponentStyle-menuItemContainer {
    width: 21.875em !important;
    margin: 2px 0px;
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    border-radius: 10px !important;
}

/* ивенты */
.AnnouncementHomeScreenComponentStyle-mainContainer > .Common-flexCenterAlignCenterColumn {
    height: 0px !important;
}
.AnnouncementHomeScreenComponentStyle-navigationLabelContainer {
    display: none !important;
}
.AnnouncementHomeScreenComponentStyle-announceContainer {
    height: 8em !important;
    border-bottom-right-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
    background: linear-gradient(transparent 0%, black 100%) !important;
}
.AnnouncementHomeScreenComponentStyle-mainClickContainer > .Common-backgroundImageContain {
    border-radius: 10px !important;
}
.AnnouncementHomeScreenComponentStyle-mainContainer {
    backdrop-filter: blur(5px) !important;
    background-color: black !important;
    border-radius: 10px !important;
}

/* Элитный пропуск */
.QuestsChallengesComponentStyle-blockImage {
    opacity: 0.07 !important;
    border-top-left-radius: 10px !important;
}
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover {
    background-color: #25252580 !important;
}
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass {
    background-color: #00000080 !important;
    background: transparent;
}

/* Пропуск */
.QuestsChallengesComponentStyle-premiumTier,
.QuestsChallengesComponentStyle-tiers,
.QuestsChallengesComponentStyle-eventTier,
.QuestsChallengesComponentStyle-blockGradientEvent,
.QuestsChallengesComponentStyle-blockGradient {
    background-image: unset !important;
}
.QuestsChallengesComponentStyle-maxTierBlockFree {
    background: radial-gradient(180% 100% at 50% 100%, #00000030 0%, transparent 100%) !important;
}
.EventBattlePassLobbyComponentStyle-commonBlockProgressBarEvent,
.EventBattlePassLobbyComponentStyle-commonBlockProgressBarChallenge {
    background-color: black !important;
}
.BattlePassLobbyComponentStyle-levelFinished {
    color: white !important;
}
.BattlePassLobbyComponentStyle-menuBattlePass {
    backdrop-filter: blur(5px) !important;
    background-color: #00000080 !important;
    background: transparent;
    border-radius: 10px !important;
}
.BattlePassLobbyComponentStyle-menuBattlePass:hover {
    background-color: #25252580 !important;
}

/* загрузка */
.wrapper .ApplicationLoaderComponentStyle-container > div[style*="linear-gradient"] {
    background: linear-gradient(transparent 0%, black 100%) !important;
}
.ApplicationLoaderComponentStyle-loader {
    filter: opacity(0) !important;
}

/* tab */
.BattleTabStatisticComponentStyle-commonBlockScroll {
    margin-bottom: 0em;
    margin-top: 0.5em;
}
.BattleTabStatisticComponentStyle-dmTableContainer table thead,
.BattleTabStatisticComponentStyle-redTeamTableContainer table thead,
.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead {
    display: none;
}
.BattleTabStatisticComponentStyle-containerInsideTeams,
.BattleTabStatisticComponentStyle-containerInsideResults {
    box-shadow: none;
    backdrop-filter: blur(7px) !important;
    background-color: #00000099;
    border-radius: 10px;
    width: 90em;
}
.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr, .BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr {
	  border-radius: 7px;
    width: 43.9em;
}
.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr td:nth-child(n+7),
.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr td:nth-child(n+6),
.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+7),
.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+6),
.BattleTabStatisticComponentStyle-redTeamTableContainer table tbody tr td:nth-child(n+7),
.BattleTabStatisticComponentStyle-blueTeamTableContainer table tbody tr td:nth-child(n+6) {
    border-left: none;
}
.BattleTabStatisticComponentStyle-gsCell, .BattleTabStatisticComponentStyle-defenceCell, .BattleTabStatisticComponentStyle-scoreCell, .BattleTabStatisticComponentStyle-deviceCell {
    visibility: unset !important;
}
.BattleTabStatisticComponentStyle-containerInsideTeams>div:first-child{
    justify-content:center;
    text-align:center;
}
.BattleTabStatisticComponentStyle-containerInsideTeams>div:first-child:hover{
    text-align:center;
}
.BattleTabStatisticComponentStyle-containerInsideTeams>div:nth-child(2)>div>div:first-child tbody>tr td:first-child{
    min-width:12em;
}
.BattleTabStatisticComponentStyle-containerInsideTeams>div:nth-child(2)>div>div:last-child tbody>tr td:first-child{
    min-width:12em;
}
.BattleTabStatisticComponentStyle-resistanceModuleCell{
    min-width:10em;
    visibility:unset !important;
    width:10em !important;
}
.BattleTabStatisticComponentStyle-rowBackGround:hover,
.BattleTabStatisticComponentStyle-selectedRowBackGround:hover {
    box-shadow: none;
}
.BattleTabStatisticComponentStyle-header {
    border-bottom: none;
}
.BattleTabStatisticComponentStyle-containerInsideResults {
    width: 65em;
}
.BattleTabStatisticComponentStyle-dmTableContainer table tbody tr {
    border-radius: 7px !important;
    width: 63.3em;
}
.BattleTabStatisticComponentStyle-resistanceModuleCell {
    display: flex !important;
    justify-content: space-between !important;
    width: 10em !important;
    padding: 0em 0.5em !important;
    height: 2em !important;
}
.BattleTabStatisticComponentStyle-defenceLabel {
    margin-left: 0em !important;
    margin-right: 0em !important;
}

/* Hud */
.BattleHudComponentStyle-tabButton, .BattleHudComponentStyle-pauseButton, .BattleHudComponentStyle-fullScreenButton {
    background: #00000080 !important;
    backdrop-filter: blur(5px) !important;
    border-radius: 10px !important;
}
.BattleHudComponentStyle-tabButton:hover, .BattleHudComponentStyle-pauseButton:hover, .BattleHudComponentStyle-fullScreenButton:hover {
    background: #25252580 !important;
}

/* стилизация уведомлений с битве */
.BattleMessagesComponentStyle-message {
    background-color: #00000080 !important;
    backdrop-filter: blur(5px) !important;
    border-radius: 7px !important;
}
.BattleMessagesComponentStyle-container {
    width: unset !important;
    align-items: flex-start !important;
    margin-left: 1em !important;
}

/* миссии */
.TableMainQuestComponentStyle-rewardsContainerTable > .Common-flexCenterAlignCenterColumn,
.SuperMissionComponentStyle-descriptionSuperMission > div,
.MainQuestComponentStyle-colorLockedGradient,
.SuperMissionComponentStyle-rewardsContainer > .Common-flexCenterAlignCenterColumn,
.MainQuestComponentStyle-rewardsContainer > .Common-flexCenterAlignCenterColumn {
    background: transparent !important;
    background-color: transparent !important;
}
.SuperMissionComponentStyle-descriptionSuperMission > div > .SuperMissionComponentStyle-buttonDisable {
    background-color: #25252580 !important;
}
.TableMainQuestComponentStyle-colorLockedGradientTable {
    background: linear-gradient(90deg, #ff333340 0%, #ff333300 50%), transparent !important;
}

/* пауза */
.NotificationViewStyle-progressNotification {
    display: none;
}
.InvitationWindowsComponentStyle-commonBlockButton,
.InvitationWindowsComponentStyle-commonBorder {
    border-radius: 10px !important;
}
.InvitationWindowsComponentStyle-commonBlockButton:hover,
.InvitationWindowsComponentStyle-commonBorder:hover {
    background-color: #25252580 !important;
}
.ClanStatisticsComponentStyle-areCommon,
.ClanHeaderComponentStyle-blockInform,
.ClanInfoComponentStyle-messageClan,
.ClanInvitationsComponentStyle-invitationContent,
.InvitationWindowsComponentStyle-commonItem,
.ConverterDialogComponentStyle-modal,
.DialogContainerComponentStyle-container {
    background: #00000080 !important;
    backdrop-filter: blur(5px) !important;
    border-radius: 10px !important;
}
.ModalStyle-rootHover {
    background-color: #00000080 !important;
}
.BattlePauseMenuComponentStyle-redMenuButton:hover {
    background: #28000080 !important;
}
.BattlePauseMenuComponentStyle-menuButton:hover {
    background: #25252580 !important;
}
.BattlePauseMenuComponentStyle-redMenuButton,
.BattlePauseMenuComponentStyle-menuButton {
    margin: 2px 0px !important;
    border-radius: 10px !important;
    background: #00000040 !important;
}
.BattlePauseMenuDialogComponentStyle-wrapper {
    backdrop-filter: blur(5px);
    border-radius: 10px !important;
    padding: 20px !important;
    background-color: #00000099 !important;
    max-width: 27em !important;
}
.BattlePauseMenuDialogComponentStyle-content {
    padding-left: 0em !important;
    padding-right: 0em !important;
}
.BattlePauseMenuComponentStyle-disabledButton {
    background: #25252599 !important;
}
.BattlePauseMenuComponentStyle-blackGlobalWrapper {
    background: transparent !important;
}
.NotificationViewStyle-commonBlockNotification {
    background-color: #00000080 !important;
    backdrop-filter: blur(10px) !important;
}
.NotificationViewStyle-commonBlockNotification,
.NotificationViewStyle-positionBlock {
    border-radius: 10px;
}
.NotificationViewStyle-commonBlockButtonYesNo > .Common-flexCenterAlignCenter p {
    background-color: transparent !important;
    border: none !important;
}
.NotificationViewStyle-commonBlockButtonYesNo > .Common-flexCenterAlignCenter span {
    color: white !important;
}
`;

const body = document.body || document.getElementsByTagName('body')[0],
	style = document.createElement('style');
style.className = 'css';
if (style.styleSheet) {
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}
body.appendChild(style);
const appendChild = HTMLElement.prototype.appendChild;
HTMLElement.prototype.appendChild = function (element) {
	element?.classList?.forEach((className) => {
		if (className.includes('ksc-')) return;
		const appendChildEvent = new CustomEvent(className, {
			bubbles: true,
			detail: element,
		});
		document.dispatchEvent(appendChildEvent);
	});
	return appendChild.apply(this, arguments);
};


function updateStyles() {
    const items = document.querySelectorAll('.PrimaryMenuItemComponentStyle-itemCommonLi,.FooterComponentStyle-footer li');

    items.forEach(item => {
        const notificationIcon = item.querySelector('.PrimaryMenuItemComponentStyle-notificationIconNewNews,.FooterComponentStyle-marginEllips');
        const menuItemContainer = item.querySelector('.PrimaryMenuItemComponentStyle-menuItemContainer div,.FooterComponentStyle-containerMenu div');

        if (notificationIcon) {
            notificationIcon.style.display = 'none';
            if (menuItemContainer) {
                menuItemContainer.style.backgroundColor = '#f3a683';
            }
        } else {
            if (menuItemContainer) {
                menuItemContainer.style.backgroundColor = '';
            }
        }
    });
}

function replaceColors(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const style = getComputedStyle(element);
        const backgroundImage = style.backgroundImage;
        if (backgroundImage.includes('rgb(0, 25, 38)') || backgroundImage.includes('rgba(0, 25, 38, 0)') ||
            backgroundImage.includes('rgb(0, 26, 39)') || backgroundImage.includes('rgba(0, 26, 39, 0)')) {
            const newBackgroundImage = backgroundImage
                .replace(/rgb\(0, 25, 38\)/g, 'black')
                .replace(/rgba\(0, 25, 38, 0\)/g, 'transparent')
                .replace(/rgb\(0, 26, 39\)/g, 'black')
                .replace(/rgba\(0, 26, 39, 0\)/g, 'transparent');
            element.style.backgroundImage = newBackgroundImage;
        }
    });
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            updateStyles();
            replaceColors('.ScrollingCardsComponentStyle-scrollCard .Common-backgroundImageCover, .FormatsSectionComponentStyle-card .Common-backgroundImageCover');
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

updateStyles();
replaceColors('.ScrollingCardsComponentStyle-scrollCard .Common-backgroundImageCover, .FormatsSectionComponentStyle-card .Common-backgroundImageCover');

/* СТАРАЯ ВАРИАЦИЯ ОТОБРАЖЕНИЙ ИКОНОК РЕЗИСТОВ В ТАБЕ */
(() => {
	var tankResistances = [
		{
			name: 'immortality',
			shitPicture:
				'https://tankionline.com/play/static/images/all_resistance.b45eae39.svg',
			picture:
				'https://tankionline.com/play/static/images/all_resistance.05f196ef.svg',
		},
		{
			name: 'Броненосец',
			shitPicture:
				'https://tankionline.com/play/static/images/crit_resistance.7fb68893.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/crit_resistance.3f4d1cc2.svg',
		},
		{
			name: 'Огнемёт',
			shitPicture:
				'https://tankionline.com/play/static/images/firebird_resistance.785a9d6b.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/firebird_resistance.00ac2221.svg',
		},
		{
			name: 'Фриз',
			shitPicture:
				'https://tankionline.com/play/static/images/freeze_resistance.33bdf642.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/freeze_resistance.d26eb338.svg',
		},
		{
			name: 'Изида',
			shitPicture:
				'https://tankionline.com/play/static/images/isis_resistance.30a69ffc.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/isis_resistance.5b05887a.svg',
		},
		{
			name: 'Тесла',
			shitPicture:
				'https://tankionline.com/play/static/images/tesla_resistance.3e686c8e.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/tesla_resistance.663d3597.svg',
		},
		{
			name: 'Молот',
			shitPicture:
				'https://tankionline.com/play/static/images/hammer_resistance.6c549d29.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/hammer_resistance.28e73097.svg',
		},
		{
			name: 'Твинс',
			shitPicture:
				'https://tankionline.com/play/static/images/twins_resistance.ad189f61.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/twins_resistance.fbbc4d72.svg',
		},
		{
			name: 'Рикошет',
			shitPicture:
				'https://tankionline.com/play/static/images/ricochet_resistance.8247beaa.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/ricochet_resistance.69c6c7ee.svg',
		},
		{
			name: 'Смоки',
			shitPicture:
				'https://tankionline.com/play/static/images/smoky_resistance.845afc14.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/smoky_resistance.c4c202ca.svg',
		},
		{
			name: 'Страйкер',
			shitPicture:
				'https://tankionline.com/play/static/images/rocket_launcher_resistance.b7dfd64f.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/rocket_launcher_resistance.5772cbaa.svg',
		},
		{
			name: 'Вулкан',
			shitPicture:
				'https://tankionline.com/play/static/images/vulcan_resistance.824f6f0e.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/vulcan_resistance.9aebf267.svg',
		},
		{
			name: 'Гром',
			shitPicture:
				'https://tankionline.com/play/static/images/thunder_resistance.6d7f4531.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/thunder_resistance.9dab2abf.svg',
		},
		{
			name: 'Скорпион',
			shitPicture:
				'https://tankionline.com/play/static/images/scorpio_resistance.e8f1787f.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/scorpio_resistance.d40f8fbb.svg',
		},
		{
			name: 'Рельса',
			shitPicture:
				'https://tankionline.com/play/static/images/railgun_resistance.636a554f.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/railgun_resistance.7577c7a1.svg',
		},
		{
			name: 'Магнум',
			shitPicture:
				'https://tankionline.com/play/static/images/artillery_resistance.9b4cbc34.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/artillery_resistance.bd49fc96.svg',
		},
		{
			name: 'Гаусс',
			shitPicture:
				'https://tankionline.com/play/static/images/gauss_resistance.bb8f409c.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/gauss_resistance.acf358ed.svg',
		},
		{
			name: 'Шафт',
			shitPicture:
				'https://tankionline.com/play/static/images/shaft_resistance.0778fd3e.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/shaft_resistance.7e58bc19.svg',
		},
		{
			name: 'Мины',
			shitPicture:
				'https://tankionline.com/play/static/images/mine_resistance.dd581c90.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/mine_resistance.0d0d3c98.svg',
		},
	];
	new MutationObserver((e) => {
		e.forEach(({ addedNodes: e, target: t }) => {
			e.length &&
				('tbody' === t.localName ||
					t.className.includes('BattleComponentStyle-canvasContainer')) &&
				t.querySelectorAll('.Common-maskImage').forEach((e) => {
					let t = window
							.getComputedStyle(e)
							.getPropertyValue('-webkit-mask-image')
							?.split('"')?.[1],
						a = tankResistances.find(({ shitPicture: e }) => t === e);
					a &&
						(e.style.cssText = `-webkit-mask-image: none;background: url(${a.picture}) center center / 1em 1em no-repeat;width: 1em;height: 1em;`);
				});
		});
	}).observe(document, { childList: !0, subtree: !0 });
})();

/* СТАРАЯ ВАРИАЦИЯ ОТОБРАЖЕНИЙ ЗВАНИЯ ВОЗЛЕ НИКНЕЙМА */
(() => {
	'use strict';
	const ranks = [
		{ rankName: 'Recruit', experience: 0 },
		{ rankName: 'Private', experience: 100 },
		{ rankName: 'Gefreiter', experience: 500 },
		{ rankName: 'Corporal', experience: 1500 },
		{ rankName: 'Master Corporal', experience: 3700 },
		{ rankName: 'Sergeant', experience: 7100 },
		{ rankName: 'Staff Sergeant', experience: 12300 },
		{ rankName: 'Master Sergeant', experience: 20000 },
		{ rankName: 'First Sergeant', experience: 29000 },
		{ rankName: 'Sergeant-Major', experience: 41000 },
		{ rankName: 'Warrant Officer 1', experience: 57000 },
		{ rankName: 'Warrant Officer 2', experience: 76000 },
		{ rankName: 'Warrant Officer 3', experience: 98000 },
		{ rankName: 'Warrant Officer 4', experience: 125000 },
		{ rankName: 'Warrant Officer 5', experience: 156000 },
		{ rankName: 'Third Lieutenant', experience: 192000 },
		{ rankName: 'Second Lieutenant', experience: 233000 },
		{ rankName: 'First Lieutenant', experience: 280000 },
		{ rankName: 'Captain', experience: 332000 },
		{ rankName: 'Major', experience: 390000 },
		{ rankName: 'Lieutenant Colonel', experience: 455000 },
		{ rankName: 'Colonel', experience: 527000 },
		{ rankName: 'Brigadier', experience: 606000 },
		{ rankName: 'Major General', experience: 692000 },
		{ rankName: 'Lieutenant General', experience: 787000 },
		{ rankName: 'General', experience: 889000 },
		{ rankName: 'Marshal', experience: 1000000 },
		{ rankName: 'Field Marshal', experience: 1122000 },
		{ rankName: 'Commander', experience: 1255000 },
		{ rankName: 'Generalissimo', experience: 1400000 },
		{ rankName: 'Legend', experience: 1600000 },
	];

	new MutationObserver((mutations) => {
		mutations.forEach(({ target }) => {
			if (
				target.className === 'wrapper' ||
				target.className === 'BattleComponentStyle-canvasContainer'
			) {
				const userNameRank = target.querySelector(
					'.UserInfoContainerStyle-userNameRank'
				);
				const progressValue =
					Number(
						target
							.querySelector('.UserInfoContainerStyle-progressValue')
							?.textContent.split('/')
							.at(0)
							?.replaceAll(' ', '')
							.trim()
					) || 0;
				if (!progressValue) return;

				if (!userNameRank?.textContent.includes('|')) {
					userNameRank?.prepend(`${getRank(progressValue)} | `);
				}
			}
		});
	}).observe(document, { childList: true, subtree: true });

	function getRank(experience) {
		return ranks.reduce(
			(currentRank, { rankName, experience: rankExperience }, index) => {
				const nextRank = ranks[index + 1];
				if (!nextRank && experience > rankExperience) {
					return `${ranks.at(-1).rankName} ${Math.ceil((experience - 1600000) / 200000)}`;
				}
				return !currentRank && experience < nextRank?.experience
					? rankName
					: currentRank;
			},
			''
		);
	}
})();

/* фильтры */

(function() {
    let contrastEnabled = localStorage.getItem('contrastEnabled') === 'true';
    let contrastValue = parseInt(localStorage.getItem('contrastValue')) || 100;
    let hueRotateValue = parseInt(localStorage.getItem('hueRotateValue')) || 0;
    let brightnessValue = parseInt(localStorage.getItem('brightnessValue')) || 100;
    let sepiaValue = parseInt(localStorage.getItem('sepiaValue')) || 0;
    let saturateValue = parseInt(localStorage.getItem('saturateValue')) || 100;
    let invertValue = parseInt(localStorage.getItem('invertValue')) || 0;

    const menu = document.createElement('div');
    menu.style.position = 'absolute';
    menu.style.width = '20em';
    menu.style.top = '2em';
    menu.style.right = '2em';
    menu.style.transform = 'scale(0)';
    menu.style.zIndex = '1000';
    menu.style.display = 'block';
    menu.style.backgroundColor = 'rgba(0, 25, 38, 0.8)';
    menu.style.color = 'white';
    menu.style.borderRadius = '10px';
    menu.style.backdropFilter = 'blur(5px)';
    menu.style.padding = '10px';
    menu.style.boxShadow = '0px 0px 0px 1px rgb(255 255 255)';
    menu.style.transition = 'transform 0.3s ease';

    const dragLabel = document.createElement('div');
    dragLabel.innerText = "Drag The Menu";
    dragLabel.style.position = 'absolute';
    dragLabel.style.top = '10px';
    dragLabel.style.right = '10px';
    dragLabel.style.cursor = 'move';
    dragLabel.style.color = 'white';
    dragLabel.style.fontSize = '1em';
    dragLabel.style.zIndex = '1001';
    menu.appendChild(dragLabel);

menu.innerHTML = `
    <div id="title" style="text-align: center; margin: 0px 0px 10px 0px;">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvwAAABgCAYAAABhY6aeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABAMSURBVHhe7d17yGVVHcZxpxlHTR2R0kKUSirzklpJpFlomEp/WFGamVM2ylhpEKRF2QUyr9VfomPGWF7SDJQiSAfTIrqBhZqWhWnhpVLIyxjO6Fzent/eZ+X2vPucfb+stb4feDhrn/fc3rPWXvu313ve912ysLCwDQAAAIAwvWRyCQAAACBAFPwAAABAwCj4AQAAgIBR8AMAAAABo+AHAOSpcnxYMrkEAIzQvAndvna88qSylYwuzyuPKz9S3qE08SGlaT8/pZyklNXG2LLnPEHBeLUxtkj/sT47UdlWKcOOF3cpeY9Fhs0W5WnlDmW10tSdSt7zkGHj+vn3yulK23ZXvq7cr2xQ8l4D6T61+3lewW8PvFSxlRsyvtiBeDflvco65SpluVKV9bGNg7znqBJ7HEtZ9pzLlLzHKhu7f5XnRP/cHJPXf2ScMXZp+5YdXMqw27cxj5D2Y/2yQjlEWaNY4d9kkcjGRd7zkGHj+vktymWKFYRNFwOdUxU70TtHea2yvZL3Gkj3me5n25/fqRRyB2P4bQdlpfJjZTu7ogJ31tiUO/Msy26/OW3WZs9X5TnRvzbGFoZRZW6w/ZB/6jJ+dsy3wv9q5Wi7AkGyfraCsI1+/qLyLWWPZAtj4vZnW/A9xq6Yp6jgr7pqi+HYmd9Riq3gVDXEiZ87U23CrTRhvNyqBPzh+qtqv9HP/ni1crGyT7JVDf3sD+vni5R9k63qVilnKbskWxgrtz/P7eeigst27CGKQdRjH3F5n/KxZKsc619fJ3DGJjAOrO775yDlc2kTATtYsaK96vHyNcqnlV2TLYzdgcrZaTNf0QDwuRiMle2cH06bpbXVx32PFcbn+NE/frJ+o+/CZx/3ODJtImDHKkekzdI+oNT5CRCG8x7lXWlzsaKCn0nfT/sph6fNQj73L2MT6E7V/Yv90T+vUA5TqvQd/ewf189VHKrY7wfCH9bPb0+bi5Up+OEfW+W3z3SFzsYnYxQA6rG/9raXwkeywma/77Zn2ixt78kl/GL7c66igt8wEfhp7P1GoQ6MG/toHDjGIw9/sCUwFPwAAABAwCj4w+TLR13aGFusQgLdYN+KA/0ch6r9zLjw08x+Kyr4rSCj4PdPLH3G2PQDBw4/sX8BgF9qF/zwU9UTtbYKsiqPQxEYD/o6fPSxvzixAyJAwR+mKhO4uy0HbHSFgsI/1mdV+o1jiZ/YN4GwzNyniybprcqWtAmPWIdb340ZJxhxqFo4Yniuv6rMIezP/nH9XHX/ZH/2E/to+GzfnFmzFxX89nUGiZ/KTsp2O+vjIfqZsRU++9Nu/Hm38LHC7x83/zIPA2GwfXlm7TdvkraD9CbFVnnsAWKLfd9Fybvf0LHXZWd4G5Qy7D6m70mfg0wcbCxuVqbHqS9pKu8x+0rd+crYpd2nLOtjO15MPxYZf55Xqqjbz3XGYswJUd73SdqL7Vu2f+ZasrBgt5lpuWITeZWJH36xwvtk5TJlJ7uipvXKmco1yVaxk5Q1yopkq57nlFXKdckW0Fx2zrtVOUpp4j5lv7SZLLC4idkHc1eLAHTmEOUE5TTF/nN+G76jrE6bpdyjHJA2G3tAuVJ5MNl68Tw4a47JWxQcYmFyo3LL5NJrRQU/4rBSseJ7x2SrnjoF/+XKzslWPbYDnqpQ8KML65Sj02Zt2YIfAKo4QrlCeV2y1cxQBf9tynHKs8kWBsPnLjGUNs7UOVtFV+wjjW2MUXuMlyrMtQCq+oVyiVL1Y1d5+l4dNw8rX1Eo9keAgxCcISaDIZ4TKMN+96CtE0p7LD4WCaAqW3iwjxZa4eyj+5XfpE0MjYIfPrOCjFV+dKWtscUYBVCHLRb8VWljhX8Ij0wuMQIU/GhrlZ3VeiAfBT+AuljYQiso+DEUThAQCw7WAJrwdQ5h7hsRCn64wnuIHbNp0c9kgi61cVLKGAUADI6CHwC6RdEPABgUBT/4aA3QLQp+AMCgKPgRAk5aMFZW7FPwA2iCYxwao+AHgG5R8AOIEScqI0LBDwAAME5Wp1E4ozEKfrD6CHSH/QtAE8cpe6TNRoaYi+xEZYe0iaHFWPBztrzYEO9HG8/pJjD6E12gWIfD4hiGYOPueGWXZMs/m5SNaRNDK5rElilLJ5dWVI2xsHKvy74Xe60Wa7u469z3kf2es200R+ENxMnt+9l51y7HNie444WLe73uNbu4123Xbzu5tOuRcu+TO6a69wvtWaFconww2fKTjQ0WTrqVnc9sn7T3PNeShYW5ffFu5RxlV2Wrkn3gruU9R/Y6157+BmzbJcu27T7u+v8q5yk3J1vxssFxsnKZsqNdUdMzypnK1clWsZXKGqXJc1ofrlZuUGx8Am1apxydNmv7k3JA2gze9cpByuZkazGbf928nTeXT5uew4vkPU7edWUeN3s/myOvVc5NtvB95UDFHVOn32N33fT1TtV+zZq+b95zO7Oev655j5f3Pbnrsl/Lu86x61zseLan8nKlLVcop6fNUu5Rms5djypPKK4Ite8r71jt3lu7dDF52/Pkva9m1vtdZN5tytx/2rzXn308156+nCX7Ptk8fL6ySFHBf5JypbJdshWWp5UzFJu8YmYD5KPKpQoFP/ACCv5q7lX2T5vBsePgqWkzencrVvDDL0MU/OjfWuW0tPliM5f+M+wzWKFxZzmzVqJiNO/Mc6xcP/r42oHQbJlchijE4yDiYeP3kbSJwM2ch4sK/rmfBwIAYCLkE28WFV7Ae+Ef+1jNHWkTgZu5fxYV8/Z1flEpfL5P4EWfbwPQPQpBYJxuV25Jmwhc7YLf7sgKP8aKAgNAH5hr4Cv7LP7X0iYiULvgD5V7Q5jEw8AKPwD0g+OmP/6tfF75S7KFqJUp+CmmwhZC/zJGAXSJIhe+sSL/40rsf3ocE0UFvxVSIRdTTOJ+o/8AAHjBg8pZyr7KL+0KRGVmXVSm4OfvmwMAivCTNmBc2Cfxf7Gv8MNvrPAD6APHQfhib+Wbiv3Tv8MVjpNxmTlXxfpLuxgeB1AAALqxn/I9pel/C4dfan+kx3B2GAcf+5mxCaAPzDXw0R7Khco+yVY1LMoFJvaCnwENAABCdaBydtpEzPhID4bECRcAHzBXwVdW5x2rHJlslceYD0yMK/w2iN1AZkC3q+/3kx+zA+gDf60OPttNOSxtIlYxrvBni0QKRgBAEY4V8NlyZc+0WRoLooFZsrAwt09XKt9Rtku26tmk/E3ZmGy9eIW9iToTcPZ5n1HOVW5PtuJ2inKZskOyVY+9n2co1yRbxU5W1ig7JVv12JhapVyfbAHtWqc0/QsX9qfxDkibwfuj8sa0WdujypNpM5njp48X0/N+9muunb3OTG877rHsMq9t7L6blR8oF9kV2OYepemYfkh5Qsnrm7zrrE9m9WNWth+zl1l511Ux/Trc9vRlWbNuv5diK/NNX69zufLJtFnK1cqbFHt9tjhsP+XaMtk27nVlX3/2tU5/X9mvTX9PZb426zbTt29D9rXntYuuy5p+fXY7ey/t0r6W/br9SdUVabO2K5VT0+aL9VHwr1esELw22cIYWcFvxff2yVY9VQv+jyg2AVHwY6wo+Ktpo+C/SrH5aAjZA+/cA2Pk2ij41yqnpU3MYAtwFyirJ+2mvq18Im16r0yRX+Y2dc2bH6a/5l6HXbqvZW/jTqbMvcr+abO2mQV/0Ud67EXN+8bKauMx0B36B8AYDDkXueMd82H3+J2IYhuUzyg/TLaQld1XZ8XGWFfJez6Xae767P2y7Hon7/6t6eMz/Esn6fJsC8PrdKDOwJjC2DFGq+FYEYcYf3+wrhuUx9MmAma/Z9Gpvna67Oe+EK6qfcyYAJDlVsEQtuyqJua7WaHgD9/zk8umZi6YlCn425h82bkBAIDhpA5YrNP9oo8VflZsAPiIj5b0j2MFAHSgj4KfCRx5bFwwNgAAADrW12f4KezQFVZhAQAA5ujjM/wU+/GgrwE0wRwCIFadLmD2tcKPcbODrK8HWlb4AQCYj2Nl5Cj44TM7SWESQ1cYWwCAvrDCD8xAwQ+MB/siymKsAIsNWvCzU6IrbYyt7ZVXpU0AAeCYA3SDfWvcXq/skDa7wQo/fGYT2NvSJoAA2DGp04MeGqNwBNp3jNLpAiYFP3x3tHJe2gTguU3KhrQJAFE4VPmU0mlNXubB+TNpGLNtlS8oNynvtyuAEWH+rCZ7TFqqsJoMoCs2v5RJV45V1io/Ud5gV7Rg5jGHFX6EwHZIK/ZvVLaSTvOUcqICdOEUxY01W+3fktkm3eQSBeGrWrjeqeSNlyqxfXi98nRO7FhSlLz7ZVPl9tnb/Uu5S7HvsUymb3u38piSfcwyeUbJzmk/VVYpL1M610fB3+XZEdoTwkqkOxsn3WW5YiuvQBfyxhzpNvbHD4Bpy5S88VIl9hg7KytyskuJ5N0vmyq3z97ulcpBFXNwJgcquyvZxyyTnRSru7PvUW9Y4QdQxfOKrVAA8J8t9LA/x6HOoh4fSQwIBT+GwkTip15XJAAAg2G+98/M2oqCH0BVnKwBYaCgwyyMjcCUKfjpdAAOiwRAWDiBjwP9HLk+Dt42yBho42b9w4kdymCcAED4qNsCwwo/2sQEET6bD5gTymOfABZjv+gf73kcZvYzP56HQxEHtI+DLAAfMXf5aWYtV1Tws5oHIFZtzH3/nFwCY0VhF4eq/bx5cgm/sMKPQn2f2HEyiRg8MrmMAfuzf+z/ajycNhG4qvvng5NL+OWhyeUirPBjKKwq+SmWfmtj3ntW+V3aBEbpCeWOtFkac3ccfqtsSJvwxGPKzGNOmRV+dm4ATkzzQdPv9R7l2rQZBY4Vftmq3Kb8LNnqFwuJ/av6nt+k/DltwhO3K7emzcX6KvjZucfN+od+Rhmx/Bv+pmP5P8o3lI3JFjA+dytfTZuIQNU57e/KpcqTyRbG7i7lS2kzX1HBb0VgG7+4wcrPuDXtZ7u/S1m2umSBP1z/Vulnn9Udn3aA/LJyY7IVj1jGRQismPus8kCyVU0b/cxYqWao9+u7ysXK08kWxuofytnK3N+7KCr4l05SlxukZX6SgGG4Pq7bz9mJqEo/2/PxEwH/xHKgtvFZdd6yE4T7lTOVNXZFRJYpzPPjZ2PUPrO/Uvm5XVFDG/3M3F+N7V9N1X3PL1Ts5JC/ODY+tj//QbH9ufCjeUU77qZJ7CBfNfZCXDuWjwH4yAobW923v9aQ7b8yyfaxpcpPCWxMTN+fjDfZvorhz7XZ9/nc5LIo9su59ynnK29WrlNiY++DjYvp94YMH9t31ytW6J+uvFX5tVKXzd15z1Mldryh6C+vbh2Wjb3nda1VbNxcoNhPheyjinnPQbqP25+t0D9DOUT5lVJoycKC3X+m7RU+gxo2K/iXK24HBpCyBRGbXFHMrUDGcDIYO/aL/tnJEcdnNFJU8AMAAADwGJ+5BAAAAAJGwQ8AAAAEjIIfAAAACBgFPwAAABCsbbb5H23GJqTVZNY5AAAAAElFTkSuQmCC" style="filter: drop-shadow(0 0 3px white);max-width: 100%;height: auto;">
    </div>
    <span id="author" style="display: none; text-align: center; margin: 0px 0px 10px 0px; font-size: 0.8em; color: #ccc;">by <a href="https://vk.com/zxchumorist" target="_blank">humorist</a></span>
    <label for="contrastSlider">Contrast: <span id="contrastValue">${contrastValue}%</span></label>
    <input type="range" id="contrastSlider" min="0" max="200" value="${contrastValue}">
    <br>
    <label for="hueRotateSlider">Hue Rotate: <span id="hueRotateValue">${hueRotateValue}deg</span></label>
    <input type="range" id="hueRotateSlider" min="0" max="360" value="${hueRotateValue}">
    <br>
    <label for="brightnessSlider">Brightness: <span id="brightnessValue">${brightnessValue}%</span></label>
    <input type="range" id="brightnessSlider" min="0" max="200" value="${brightnessValue}">
    <br>
    <label for="sepiaSlider">Sepia: <span id="sepiaValue">${sepiaValue}%</span></label>
    <input type="range" id="sepiaSlider" min="0" max="100" value="${sepiaValue}">
    <br>
    <label for="saturateSlider">Saturate: <span id="saturateValue">${saturateValue}%</span></label>
    <input type="range" id="saturateSlider" min="0" max="200" value="${saturateValue}">
    <br>
    <label for="invertSlider">Invert: <span id="invertValue">${invertValue}%</span></label>
    <input type="range" id="invertSlider" min="0" max="100" value="${invertValue}">
    <br>
    <div id="description" style="margin-top: 5px; font-size: 0.85em; text-align: right; cursor: default;">
        <span id="descriptionText" style="cursor: pointer; color: rgb(175, 255, 112);">Description</span>
    </div>
    <div id="info" style="display: none; margin-top: 10px; color: black;">
        <span id="back" style="color: red; cursor: pointer;">Back</span>
        <p>This script will help you customize the picture in the game for yourself and provide a comfortable game.</p>
    </div>
`;

    const style = document.createElement('style');
    style.innerHTML = `
        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 5px;
            outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            border-radius: 20px;
            width: 25px;
            height: 14px;
            background: white;
            cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
            border-radius: 20px;
            width: 25px;
            height: 14px;
            background: white;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    function applyStyles() {
        const body = document.body;
        if (contrastEnabled) {
            body.style.filter = `
                contrast(${contrastValue}%)
                hue-rotate(${hueRotateValue}deg)
                brightness(${brightnessValue}%)
                sepia(${sepiaValue}%)
                saturate(${saturateValue}%)
                invert(${invertValue}%)
            `;
        } else {
            body.style.filter = "none";
        }
    }

    function toggleContrast() {
        contrastEnabled = !contrastEnabled;
        localStorage.setItem('contrastEnabled', contrastEnabled);
        applyStyles();
    }

   function toggleMenu() {
        if (menu.style.transform === 'scale(1)') {
            menu.style.transform = 'scale(0)';
        } else {
            menu.style.transform = 'scale(1)';
        }
    }

    document.addEventListener("keydown", (event) => {
        if (event.altKey && event.key === '8') {
            toggleContrast();
        } else if (event.altKey && event.key === '9') {
            toggleMenu();
        }
    });

let authorVisible = false;

let isDragging = false;
    let offsetX, offsetY;

    dragLabel.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - menu.getBoundingClientRect().left;
        offsetY = event.clientY - menu.getBoundingClientRect().top;
        document.body.style.cursor = 'move';
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            menu.style.left = `${event.clientX - offsetX}px`;
            menu.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.cursor = 'default';
    });

    document.body.appendChild(menu);

document.getElementById('title').addEventListener('click', () => {
    if (!authorVisible) {
        document.getElementById('author').style.display = 'block';
        authorVisible = true;
    } else {
        document.getElementById('author').style.display = 'none';
        authorVisible = false;
    }
});

document.getElementById('author').addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://vk.com/zxchumorist', '_blank');
});

document.getElementById('descriptionText').addEventListener('click', () => {
    document.getElementById('info').style.display = 'block';
    document.getElementById('description').style.display = 'none';
});

document.getElementById('back').addEventListener('click', () => {
    document.getElementById('info').style.display = 'none';
    document.getElementById('description').style.display = 'block';
});

document.getElementById('contrastSlider').addEventListener('input', (event) => {
    contrastValue = event.target.value;
    localStorage.setItem('contrastValue', contrastValue);
    applyStyles();
    document.getElementById('contrastValue').textContent = `${contrastValue}%`;
});
document.getElementById('hueRotateSlider').addEventListener('input', (event) => {
    hueRotateValue = event.target.value;
    localStorage.setItem('hueRotateValue', hueRotateValue);
    applyStyles();
    document.getElementById('hueRotateValue').textContent = `${hueRotateValue}deg`;
});
document.getElementById('brightnessSlider').addEventListener('input', (event) => {
    brightnessValue = event.target.value;
    localStorage.setItem('brightnessValue', brightnessValue);
    applyStyles();
    document.getElementById('brightnessValue').textContent = `${brightnessValue}%`;
});
document.getElementById('sepiaSlider').addEventListener('input', (event) => {
    sepiaValue = event.target.value;
    localStorage.setItem('sepiaValue', sepiaValue);
    applyStyles();
    document.getElementById('sepiaValue').textContent = `${sepiaValue}%`;
});
document.getElementById('saturateSlider').addEventListener('input', (event) => {
    saturateValue = event.target.value;
    localStorage.setItem('saturateValue', saturateValue);
    applyStyles();
    document.getElementById('saturateValue').textContent = `${saturateValue}%`;
});
document.getElementById('invertSlider').addEventListener('input', (event) => {
    invertValue = event.target.value;
    localStorage.setItem('invertValue', invertValue);
    applyStyles();
    document.getElementById('invertValue').textContent = `${invertValue}%`;
});

    applyStyles();
})();
