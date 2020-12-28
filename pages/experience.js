// next helpers
// components
import { Grid } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab';
import Menu from "../components/menu";
// libs
// styles
// api calls

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Menu />
      <Grid
        item
        xs={8}
        style={{ marginLeft: '-100px', textAlign: 'left'}}
      >
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <b>Nov 2016-Feb 2017</b>
              <br />(unformal) <a href="https://talentdig.id/">TalentDig</a>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <b>2013-2019</b>
              <br />S1 Information System - <a href="https://www.unikom.ac.id/">Universitas Komputer Indonesia</a>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <b>Nov 2016-Feb 2017</b>
              <br />Software Engineering - SMK Budhi Cendekia
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
    </Grid>
  );
}
