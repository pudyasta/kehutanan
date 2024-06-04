// "use client";
// import React, { useEffect, useState } from "react";
// import CardCustom from "../vote/CardCustom";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";
// import Image from "next/image";
// import { fetchPosts } from "@/utils/fetching";
// import { Skeleton } from "@mui/material";
// import axios from "axios";
// import { axiosInstance } from "@/utils/axios";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
//   "& .MuiBackdrop-root": {
//     backgroundColor: "rgba(0, 0, 0, 0.1)",
//   },
//   "& .MuiPaper-root": {
//     boxShadow: "none",
//   },
// }));

// const page = () => {
//   const [open, setOpen] = useState(false);
//   const [posts, setPosts] = useState(null);
//   const [ip, setIP] = useState("");
//   const [postId, setPostId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   useEffect(() => {
//     fetchPosts()
//       .then((res) => {
//         setPosts(res.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }, []);

//   const handleSubmit = async (id) => {
//     setLoading(true);
//     setError(null);
//     console.log(id);
//     try {
//       const ipAddress = await axios.get("https://api.ipify.org?format=json");
//       const response = await axiosInstance.post(
//         "/votes",
//         {
//           data: {
//             ip: ipAddress.data.ip,
//             post_id: id,
//           },
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("IPLog created:", response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error creating IPLog:", error);
//       setError("Error creating IPLog");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 2xl:px-52 lg:px-32 px-4 py-16">
//       {!posts
//         ? [...Array(8)].map((_, index) => (
//             <div key={index} className="w-full">
//               <Skeleton
//                 className="bg-white"
//                 variant="rectangular"
//                 width="100%"
//                 height={200}
//               />
//               <Skeleton className="bg-white" width="60%" />
//               <Skeleton className="bg-white" width="80%" />
//               <Skeleton className="bg-white" width="40%" />
//             </div>
//           ))
//         : posts.map((i) => (
//             <div key={i.id}>
//               <CardCustom onClick={handleClickOpen} data={i} />
//               <BootstrapDialog
//                 onClose={handleClose}
//                 aria-labelledby="customized-dialog-title"
//                 open={open}
//               >
//                 <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//                   {i.attributes.author}
//                 </DialogTitle>
//                 <IconButton
//                   aria-label="close"
//                   onClick={handleClose}
//                   sx={{
//                     position: "absolute",
//                     right: 8,
//                     top: 8,
//                     color: (theme) => theme.palette.grey[500],
//                   }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//                 <DialogContent dividers>
//                   <Image
//                     src={
//                       process.env.NEXT_PUBLIC_BACKEND_URL +
//                       i.attributes.photo.data.attributes.url
//                     }
//                     width={500}
//                     className="w-full"
//                     height={100}
//                   />
//                   <Typography gutterBottom>
//                     {i.attributes.description}
//                   </Typography>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button
//                     autoFocus
//                     onClick={() => handleSubmit(i.id)}
//                     variant="contained"
//                   >
//                     Vote
//                   </Button>
//                 </DialogActions>
//               </BootstrapDialog>
//             </div>
//           ))}
//     </div>
//   );
// };

// export default page;
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
