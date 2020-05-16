import React from 'react';
import {
  Dialog,
  DialogContent,
  Input,
  Grid,
  TextField,
  DialogActions,
  Button,
  IconButton } from '@material-ui/core';
import { LocationOnOutlined, NotesOutlined, AccessTime, Close } from '@material-ui/icons'
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/styles';
import * as styles from 'components/AddScheduleDialog/style.css'

const spacer = { margin: "4px 0" };

const Title = withStyles({
  root: {
    marginBottom: 32,
    fontSize: 22
  }
})(Input)

const AddScheduleDialog  = ({
    schedule: {
      form: { title, date, location, description },
      isDialogOpen
    },
    setSchedule,
    closeDialog,
    saveSchedule
  }) => {

  return(
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>
      <DialogContent>
        {/* Title */}
        <Title
          autoFocus
          fullWidth
          placeholder="タイトルと日時を追加"
          value={title}
          onChange={e => setSchedule({ title: e.target.value })}
          />
        {/* Date */}
        <Grid container spacing={1} alignItems="center" justify="space-between" >
          <Grid item >
            <AccessTime />
          </Grid>
          <Grid item xs={10}>
            <DatePicker
              variant="inline"
              format="YYYY年 M月 D日"
              animateYearScrolling
              disableToolbar
              fullWidth
              style={spacer}
              value={date}
              onChange={ d=> setSchedule({  date: d })}
            />
          </Grid>
        </Grid>
        {/* Location */}
        <Grid container spacing={1} alignItems="center" justify="space-between" >
          <Grid item >
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="場所を追加"
              value={location}
              onChange={e => setSchedule({ location: e.target.value })}
              />
          </Grid>
        </Grid>
        {/* Description */}
        <Grid container spacing={1} alignItems="center" justify="space-between" >
          <Grid item >
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField
              style={spacer}
              fullWidth
              placeholder="説明を追加"
              value={description}
              onChange={e => setSchedule({ description: e.target.value })}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={saveSchedule}>
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddScheduleDialog;
