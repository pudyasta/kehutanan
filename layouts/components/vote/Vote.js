"use client";
import React, { useEffect, useState } from "react";
import CardCustom from "./CardCustom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { fetchPosts, fetchVote } from "@/utils/fetching";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { axiosInstance } from "@/utils/axios";
import { Text } from "@radix-ui/themes";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  "& .MuiPaper-root": {
    boxShadow: "none",
  },
}));

const Vote = () => {
  const [open, setOpen] = useState([]);
  const [posts, setPosts] = useState(null);
  const [ipNow, setIPNow] = useState("");
  const [ip, setIP] = useState([]);
  const [voted, setVoted] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((res) => {
        setPosts(res.data);
        res.data.map((x) => {
          setOpen([...open, false]);
        });
      })
      .catch((e) => {});
    fetchVote()
      .then((res) => {
        setIP(res.data);
        res.data.map((x) => {
          setIP([...ip, x.attributes.ip]);
        });
      })
      .catch((e) => {});
    setVoted(Cookies.get("token") ? true : false);
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");

        setIPNow(response.data.ip);
      } catch (error) {}
    };

    fetchIP();
  }, []);

  const handleClickOpen = (id) => {
    setOpen(() => {
      const newOpen = [...open];
      newOpen[id] = true;
      return newOpen;
    });
  };
  const handleClose = (id) => {
    setOpen(() => {
      const newOpen = [...open];
      newOpen[id] = false;
      return newOpen;
    });
  };

  const handleSubmit = async (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya!",
      zIndex: 100,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosInstance.post(
            "/votes",
            {
              data: {
                ip: ipNow,
                post_id: id,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setVoted(true);
          Cookies.set("token", "x", { expires: 7 });
          Swal.fire({
            title: "Vote tersimpan",
            text: "",
            icon: "success",
          });
        } catch (error) {}
      }
    });
  };

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 2xl:px-52 lg:px-32 px-4 py-16">
      {!posts
        ? [...Array(8)].map((_, index) => (
            <div key={index} className="w-full">
              <Skeleton
                className="bg-white"
                variant="rectangular"
                width="100%"
                height={200}
              />
              <Skeleton className="bg-white" width="60%" />
              <Skeleton className="bg-white" width="80%" />
              <Skeleton className="bg-white" width="40%" />
            </div>
          ))
        : posts.map((i, idx) => (
            <div key={i.id}>
              <CardCustom onClick={() => handleClickOpen(idx)} data={i} />
              <BootstrapDialog
                onClose={() => handleClose(idx)}
                aria-labelledby="customized-dialog-title"
                className="max-h-[90vh] z-50"
                open={open[idx]}
              >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  <Text as="h2" size="1" className="text-xl font-bold block ">
                    {i.attributes.title}
                  </Text>
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={() => handleClose(idx)}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_URL +
                      i.attributes.photo.data.attributes.formats.large.url
                    }
                    width={500}
                    className="w-full"
                    height={100}
                  />

                  <Text as="h2" size="1" className="text-md my-3  block">
                    {i.attributes.description}
                  </Text>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus variant="contained" disabled={true}>
                    Voted
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </div>
          ))}
    </div>
  );
};

export default Vote;
