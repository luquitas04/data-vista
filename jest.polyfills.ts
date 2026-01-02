import { TextDecoder, TextEncoder } from "util";
import {
  TransformStream,
  WritableStream,
  ReadableStream,
} from "web-streams-polyfill";
import { BroadcastChannel } from "worker_threads";
import "whatwg-fetch";

if (!global.TextEncoder) {
  // @ts-expect-error node globals
  global.TextEncoder = TextEncoder;
}

if (!global.TextDecoder) {
  // @ts-expect-error node globals
  global.TextDecoder = TextDecoder as unknown as typeof global.TextDecoder;
}

if (!global.TransformStream) {
  // @ts-expect-error node globals
  global.TransformStream = TransformStream;
}

if (!global.WritableStream) {
  // @ts-expect-error node globals
  global.WritableStream = WritableStream;
}

if (!global.ReadableStream) {
  // @ts-expect-error node globals
  global.ReadableStream = ReadableStream;
}

if (!global.BroadcastChannel) {
  // @ts-expect-error node globals
  global.BroadcastChannel = BroadcastChannel;
}
