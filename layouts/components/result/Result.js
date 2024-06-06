"use client";
import React, { useEffect, useState } from "react";
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
import CardCustom from "./CardCustom";

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

const Result = () => {
  const [open, setOpen] = useState([]);
  const [posts, setPosts] = useState(null);
  const [ipNow, setIPNow] = useState("");
  const [voteCount, setVoteCount] = useState(null);
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
    setVoteCount([{ id: 25 }, { id: 16 }, { id: 22 }]);
  }, []);

  return (
    <>
      <Text
        as="h2"
        size="1"
        className="md:text-6xl text-3xl font-bold mt-10  block text-center "
      >
        Pemenang
      </Text>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 2xl:px-52 lg:px-32 px-4 py-16">
        {!(posts && voteCount)
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
          : posts.map(
              (i, idx) =>
                posts[voteCount[idx]?.id - 4] && (
                  <div key={i.id}>
                    <CardCustom
                      data={posts[voteCount[idx]?.id - 4]}
                      count={idx + 1}
                    />
                  </div>
                )
            )}
      </div>
    </>
  );
};

export default Result;
