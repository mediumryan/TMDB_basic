import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import components
import DetailCard from './../components/DetailCard';


const DetailContainer = styled.div`
  background-color : #000;
  height : 100vh;
  padding : 12px 0;
  display : flex;
  justify-content : center;
  align-items : center;
`

const Detail = ({datas, setSearch}) => {

  const [detailData,setDetailData] = useState();
    
  useEffect(() => {
    getDetailData();
    setSearch('');
  },[])  
  
  const { id } = useParams();
  
  const getDetailData = async () => {
    const found = await datas.find((a) => a.title == id);
    setDetailData(found);
  }

return(
  <DetailContainer>
    <DetailCard detailData={detailData}/>
  </DetailContainer>
)
}

export default Detail;