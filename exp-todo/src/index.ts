import { createCliRenderer } from "@opentui/core";
import { Header } from "./header";

const renderer = await createCliRenderer({ exitOnCtrlC: true });

renderer.root.add(Header);
