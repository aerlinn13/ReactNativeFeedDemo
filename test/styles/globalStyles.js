
import { StyleSheet } from 'react-native';

export const NavBarFontColour = '#fff';
export const NavBarBorderColour= '#000';
export const NavBarBackgroundColour = '#000';
export const NavBarBorderSize = 1;
export const NavBarFontSize = 18;
export const NavBarIconColour = '#aaa';
export const NavBarActiveHighlight = '#00cc00';

export const ScreenBackgroundColour = '#454545';
export const ListSeparatorColor = "#CED0CE";

export const MainBgColor = "#242424";
export const TitleFontColor = "#fff";
export const FontColor = "#ccc";
export const ListBackgroundColor = "#454545";
export const Font = 'Arial';
export const HighlightContentColor = "#7749A9";

export default StyleSheet.create({
    navBarHeaderStyle:{
        backgroundColor:NavBarBackgroundColour,
        borderBottomColor:NavBarBorderColour,
        borderBottomWidth:NavBarBorderSize
    },
    navBarHeaderTitleStyle:{
        fontSize:NavBarFontSize,
        color:NavBarFontColour
    },
    navBarRightIcon:{
        color:NavBarIconColour,
        padding: 10, 
        marginRight:10
    }
});