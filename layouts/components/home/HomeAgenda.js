import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function HomeAgenda() {
  return (
    <section className=" w-screen p-6  justify-center items-center container relative mx-auto my-[50px]">
      <div className=" text-primary block w-full z-10 relative mt-[50px] ">
        <p className=" text-[40px] font-bold lg:text-[54px]">Agenda</p>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <Typography variant="h6" className="font-sans" component="span">
                Mulai
              </Typography>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h6"
                  className="font-sans font-bold"
                  component="span"
                >
                  Day 1 <br></br> (Rabu, 5 Juni 2024)
                </Typography>
                <Box mt={4}>
                  <Typography
                    variant="body1"
                    className="font-sans"
                    component="span"
                  >
                    Simbolisasi Penanaman Pohon dalam Rangka Hari Lingkungan
                    Hidup Sedunia
                  </Typography>
                </Box>

                <Box mt={4}>
                  <Typography
                    variant="body1"
                    className="font-sans"
                    component="span"
                  >
                    Pameran Foto
                  </Typography>
                </Box>

                <Box mt={4}>
                  <Typography
                    variant="body1"
                    className="font-sans"
                    component="span"
                  >
                    Seminar dan Loka Karya Sesi I dengan tema “Masa Depan Hutan
                    Jawa”
                  </Typography>
                </Box>

                <Box mt={4}>
                  <Typography
                    variant="body1"
                    className="font-sans"
                    component="span"
                  >
                    Launching Film “Tanah Kita”
                  </Typography>
                </Box>

                <Box mt={4}>
                  <Typography
                    variant="body1"
                    className="font-sans"
                    component="span"
                  >
                    Seminar dan Loka Karya Sesi II dengan tema Kolaborasi Para
                    Pihak dalam Implementasi Perhutanan Sosial
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="h6"
                  className="font-sans font-bold"
                  component="span"
                >
                  Day 2 <br></br> (Kamis, 6 Juni 2024)
                </Typography>
                <Box mt={4}>
                  <Typography
                    variant="body1"
                    className="font-sans"
                    component="span"
                  >
                    Konsolidasi KPH Jawa
                  </Typography>
                </Box>

                <Box mt={4}>
                  <Typography
                    variant="body1"
                    className="font-sans"
                    component="span"
                  >
                    Coaching Clinic Film Dokumenter bertema Lingkungan
                  </Typography>
                </Box>

                <Box mt={4}>
                  <Typography
                    variant="body1"
                    className="font-sans"
                    component="span"
                  >
                    Bedah Buku “Hutan Memanggil” dan “Kemelut Tanah Kita”
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <Typography variant="h6" className="font-sans" component="span">
                Selesai
              </Typography>
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="bg-primary h-1"></div>
    </section>
  );
}
