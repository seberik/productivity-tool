# Internal productivity tool 

A shared internal productivity tool to help developers, designers, PM:s and other roles to discover, verify, share
and align on insights about Ubiquit's products and their images to visualize the product database UIDB which is
used by many systems.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API routes
There are two API routes for accessing the devices and filters as documented below. The
purpose of those is to not have to bundle the entire json file and provide the opportunity
to paginate the result althought that is not the case currently

- Devices: `/api/devices?name={name}&filter=filter1&filter=filter2`
- Filters: `/api/filters`

## Future work
- Use library e.g. react hook form for form handling
- Use something like React Query or proper implementation for transferring data from server to client
- Use e.g. Radix components for the
- Add some test coverage
