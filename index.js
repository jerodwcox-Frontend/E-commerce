function openMenu() {
document.body.classList += " menu--open"  
}
function closeMenu () {
    document.body.classlist.remove('menu--open')
}
@media (max-width: 550px){
.nav__links {
    display: none;
}
}