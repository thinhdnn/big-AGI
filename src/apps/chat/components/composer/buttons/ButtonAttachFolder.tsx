import * as React from 'react';

import { Box, Button, IconButton, Tooltip } from '@mui/joy';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';


const attachFolderLegend =
  <Box sx={{ px: 1, py: 0.75, lineHeight: '1.5rem' }}>
    <b>Attach folder</b><br />
    Drag & drop in chat for faster loads ⚡
  </Box>;


export const ButtonAttachFolderMemo = React.memo(ButtonAttachFolder);

function ButtonAttachFolder(props: { isMobile?: boolean, onAttachFolderPicker: () => void }) {
  return props.isMobile ? (
    <IconButton onClick={props.onAttachFolderPicker}>
      <DriveFolderUploadOutlinedIcon />
    </IconButton>
  ) : (
    <Tooltip disableInteractive variant='solid' placement='top-start' title={attachFolderLegend}>
      <Button fullWidth variant='plain' color='neutral' onClick={props.onAttachFolderPicker} startDecorator={<DriveFolderUploadOutlinedIcon />}
              sx={{ justifyContent: 'flex-start' }}>
        Folder
      </Button>
    </Tooltip>
  );
}