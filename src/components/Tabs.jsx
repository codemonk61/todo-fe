import React from 'react'

const tabStyle = `
   .tabWrapper{
    display: flex;
    align-items: center;
    gap: 8px;
   }
   .tab{
    border-bottom: 2px solid white;
    cursor: pointer;
    padding-bottom: 6px;
    font-weight: bold;
    color:rgb(150, 155, 164);
   }
    .activeTab{
     border-bottom: 3px solid #609cff;
     color: #609cff;
     padding-bottom: 6px;
     font-weight: bold
    }
`

const Tabs = ({onChange=()=>{}, tabData = [], selectedTab = ""}) => {

    const handleTabClick = (clickedTab) => {
       
        onChange(clickedTab)
    }

   

  return (
    <>
    <style>
        {tabStyle}
    </style>
    <div className='tabWrapper'>
        {
            tabData.map((tabDatum)=>{
              return <div key={tabDatum.value} className={tabDatum.value === selectedTab ? 'activeTab' : 'tab'} onClick={()=>handleTabClick(tabDatum.value)}>
                {tabDatum.label}
                </div>
            })
        }
    </div>
    </>
  )
}

export default Tabs