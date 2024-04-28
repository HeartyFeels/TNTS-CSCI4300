'use client'

import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import Navbar from "../components/NavBar";
import EditExam from "../components/EditExam";

const EditPage = () => {
    const router = useRouter();
    const {id} = router.query; 
    const [exam, setExam] = useState(null);

    useEffect(() => {
        if (id) { // Ensure that 'id' is not undefined
            const fetchExam = async () => {
                try {
                    const response = await axios.get(`/api/exams/${id}`);
                    setExam(response.data);
                } catch (error) {
                    console.error('Error fetching exam details', error);
                }
            };

            fetchExam();
        }
    }, [id]);

    const editHandler = async (updatedExam) => {
        try {
            await axios.put(`/api/exams/${match.params.id}`, updatedExam);
            // Assuming you want to navigate to another page after successful update or handle success
            console.log('Exam updated successfully!');
            // You can redirect or display a success message here
        } catch (error) {
            console.error('Failed to update exam', error);
        }
    };

    return (
        <div>
            <Navbar/>
            {exam && <EditExam examDetails={exam} onEditExam={editHandler}/>}
        </div>
    );
}

export default EditPage;

// import EditExam from "../components/EditExam";
// import ExamList from "../components/ExamList";
// import Navbar from "../components/NavBar";
// import { useEffect, useState } from 'react';

// // const EditPage = ({params}) => {
// //     const [exams, setExams] = useState([]);
// //     const editHandler = (exam) => {
// //         setExams((prevExam) => {
// //             //id: params.id;
// //             return [exam, ...prevExam];
// //         })
// //     }
// //     return (
// //         <div>
// //             <Navbar/>
// //             {/* <ExamList items={exams}/> */}
// //             <EditExam onEditExam={editHandler}/>
// //         </div>
// //     )
// // }

// const EditPage = ({ match }) => { // Assuming you're using react-router
//     const [exam, setExam] = useState(null);
  
//     useEffect(() => {
//       const fetchExam = async () => {
//         try {
//           const response = await axios.get(`/api/exams/${match.params.id}`);
//           setExam(response.data);
//         } catch (error) {
//           console.error('Error fetching exam details', error);
//         }
//       };
  
//       fetchExam();
//     }, [match.params.id]);
  
//     return (
//                 <div>
//                     <Navbar/>
//                     {/* <ExamList items={exams}/> */}
//                     <EditExam onEditExam={editHandler}/>
//                 </div>
//     )
//   }

// export default EditPage;