#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "uiuxjobsboard",
  boardId: "uiuxjobsboard-official",
  domain: "uiuxjobsboard.com",
  npmName: "zc-uiuxjobsboard-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
