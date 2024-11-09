import { useRef } from "react";
import Button from "./UI/Button";
import { useData } from "./Context/MovieContext";


const categoryOptions=[
    {id:'',
    displayText:'ALL'},
    {id:'Action',
        displayText:'Action'},
        {id:'Drama',
            displayText:'Drama'},
            {id:'Adventure',
                displayText:'Adventure'},
                {id:'Sci-Fi',
                displayText:'Sci-Fi'},
                {id:'Crime',
                displayText:'Crime'},
                {id:'Historical',
                displayText:'Historical'},
                {id:'Thriller',
                displayText:'Thriller'},
                {id:'War',
                displayText:'War'},
                {id:'Romance',
                displayText:'Romance'},
                {id:'Biography',
                displayText:'Biography'},
                {id:'Horror',
                displayText:'Horror'},
                {id:'Western',
                displayText:'Western'},
                {id:'Comedy',
                displayText:'Comedy'},
                {id:'Fantasy',
                displayText:'Fantasy'},
                {id:'Animation',
                displayText:'Animation'},
                {id:'Musical',
                displayText:'Musical'},
                {id:'Mystery',
                displayText:'Mystery'},



];

const filterOptions=[
    {id:'',
    displayText:'ALL'},
    {id:'AtoZ',
        displayText:'AtoZ'},
        {id:'RatingL2H',
            displayText:'Rating:Low to High'},
            {id:'RatingH2L',
                displayText:'Rating:High to Low'},
];

export default function Header(){
    const { setSearch ,setfilter,setSort} = useData();
    const searchItem=useRef('');

    function handleSearch(){
            console.log(searchItem.current.value);
            setSearch(searchItem.current.value);
    }
    function handleClear(){
        console.log(searchItem.current.value);
        if(!(searchItem.current.value===null || searchItem.current.value==='') )
        setSearch('');
        searchItem.current.value='';
}
    function handleFilterChange(event){
        console.log(event.target.value);
        setfilter(event.target.value);
    }
    function handleSortChange(option){
        console.log(option);
        setSort(option);
    }
    return <header id="main-header">
        <div id="title" >
            {/* <img src={`./logo.jpg`} alt="logo"></img> */}
            <h1>Streamify</h1>
        </div>
       
        <nav>
            <input type={'search'} placeholder='search items' ref={searchItem} ></input>
            <Button textOnly onClick={handleSearch}>Search</Button>
            <Button textOnly onClick={handleClear} >Clear</Button>
            {/* <Button textOnly onClick={handleClear} >Category</Button> */}
            <div>
                <label htmlFor='category'>Category </label>
                <select id='category' onChange={ handleFilterChange}>
                {categoryOptions.map(each=><>
                  
            <option name='filter'  value={each.id} key={each.id}
           >{each.displayText}</option>
            
              
                </>)}
                </select>
               
            </div>




            <div>
                {filterOptions.map(each=><>
                  
            <input type='radio' name='sort' id={each.displayText} defaultChecked={each.displayText==='ALL'} value={each.id}  key={each.id}
            onChange={() => handleSortChange(each.id)}
            />
              <label htmlFor={each.displayText} >{each.displayText}</label>
                </>)}
            </div>

            {/* <label htmlFor='All' >All</label>
            <input type='radio' name='filter' id='All' defaultChecked value=''
            onChange={() => handleFilterChange('')}
            />
            <label htmlFor='men'>Men</label>
            <input type='radio' name='filter' id='men'   value='m'
            onChange={() => handleFilterChange('m')}/>
            <label htmlFor='women'>Women</label>
            <input type='radio' name='filter' id='women'  value='w'
            onChange={() => handleFilterChange('w')}/>
            <label htmlFor='kid'>kids</label>
            <input type='radio' name='filter' id='kid'  value='k'
            onChange={() => handleFilterChange('k')}/> */}
            
            {/* <div>
            <label htmlFor='All' >All</label>
            <input type='radio' name='sort' id='All' defaultChecked value=''
            onChange={() => handleSortChange('')}
            />
            <label htmlFor='AtoZ'>AtoZ</label>
            <input type='radio' name='sort' id='AtoZ'   value='AtoZ'
            onChange={() => handleSortChange('AtoZ')}/>
            <label htmlFor='PriceL2H'>Price:Low to High</label>
            <input type='radio' name='sort' id='PriceL2H'  value='PriceL2H'
            onChange={() => handleSortChange('PriceL2H')}/>
            <label htmlFor='PriceH2L'>Price:High to Low</label>
            <input type='radio' name='sort' id='PriceH2L'  value='PriceH2L'
            onChange={() => handleSortChange('PriceH2L')}/>
            </div> */}
            
        </nav>
    </header>
} 