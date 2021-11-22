import AllTest from "../AllTest.json";



export class TestContainer{


    GettAllTests(){
        return AllTest;
    }
    GetAllThemes(){
        let themeList = [];
        let increaser=1;
        AllTest.forEach((elm,inde)=>{
            let exist = themeList.some(el=>el.Tema == elm.Thema);
            if(!exist)
            {
                themeList.push({Id:increaser, Tema: elm.Thema});
                increaser++;
            }
        })
        return themeList;
    }
    Chapters(){
        let chapterList = [];
        let increaser=1;
        AllTest.forEach((elm,inde)=>{
            let exist = chapterList.some(el=>el.Chapter == elm.ChapterKey);
            if(!exist)
            {
                chapterList.push({Id:increaser, Chapter: elm.ChapterKey});
                increaser++;
            }
        })
        return chapterList;
    }
    GetThemesByChapterId(key){
        let themeList = [];
        let increaser=1;
        let listOfAllThemes = AllTest.filter(elm=>elm.ChapterKey==key);
        listOfAllThemes.forEach((elm,inde)=>{
            let exist = themeList.some(el=>el.Tema == elm.Thema);
            if(!exist)
            {
                themeList.push({Id:increaser, Tema: elm.Thema});
                increaser++;
            }
        })
        return themeList;
    }

}


