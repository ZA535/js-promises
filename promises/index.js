const menuList = [
  {
    title: "Generl",
    link: "",
    icon: "fa fa-cog",
    subTitle: [
      {
        title: "language",
        link: "language",
        icon: "fa fa-language",
        subTitle: "",
        permissionName: "language"
      },
      {
        title: "home",
        link: "home",
        icon: "fa fa-language",
        subTitle: "",
        permissionName: "home"
      }
    ]
  }
];
const persList = [{ name: "ACQUIRE LANGUAGE", exist: true }];

function getNewMenuList(menuList) {
  const newMenuList = [];
  const newSubTitle = [];
  menuList.forEach((menu) => {
    if (menu.subTitle) {
      menu.subTitle.forEach((sub) => {
        const persName = "ACQUIRE" + " " + sub.permissionName.toUpperCase();
        const exist = persList.find(
          (pers) => pers.name === persName && pers.exist === true
        );
        if (exist) {
          newSubTitle.push(sub);
        }
      });
      newMenuList.push({ ...menu, subTitle: [...newSubTitle] });
    }
  });
  console.log("newMenuList", JSON.stringify(newMenuList));
}
getNewMenuList(menuList);
