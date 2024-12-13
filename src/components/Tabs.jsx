import React from 'react'

const tabStyle = `
   .tabWrapper{
    display: flex;
    align-items: center;
    gap: 8px;
   }
   .tab{
    border-bottom: 2px solid white;
    cursor: pointer
   }
    .activeTab{
     border-bottom: 2px solid red;
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
              return <div key={tabDatum.value} className={tabDatum.value === selectedTab ? 'activeTab' : 'tab'} onClick={()=>handleTabClick(tabDatum.value)}>{tabDatum.label}</div>
            })
        }
    </div>
    </>
  )
}

export default Tabs