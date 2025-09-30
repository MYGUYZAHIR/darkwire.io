# Darkwire.io - Encrypted Web Chat

## Overview
Darkwire.io is an encrypted web chat application that uses end-to-end encryption powered by the Web Cryptography API. This is a complete GitHub import configured to run on Replit.

## Recent Changes (Sept 30, 2025)
- **Single Room Mode**: Modified the app to use only one room ("main-room") instead of dynamically creating new rooms
- **Username Entry**: Added a username entry modal that prompts users to enter their name when joining the chat room
- **Replit Environment Setup**: Configured for Replit with proper port settings, environment variables, and deployment config

## Project Structure
This is a monorepo with two main parts:
- **client/**: React + Vite frontend (runs on port 5000)
- **server/**: Node.js + Koa + Socket.io backend (runs on port 3001)

## Key Technologies
- Frontend: React 18, Redux, Vite, Socket.io-client
- Backend: Koa, Socket.io, in-memory storage
- Encryption: Web Cryptography API (RSA-OAEP, AES-CBC, HMAC)

## Development
- The dev server runs both client and server concurrently
- Frontend is accessible on port 5000
- Backend API runs on port 3001
- Hot module replacement is configured for Vite

## User Preferences
- Single room only - users always join the same "main-room"
- Username must be entered when joining (2-20 characters, starts with a letter)
- All chat messages are end-to-end encrypted client-side

## Deployment
- Deployment type: VM (keeps both frontend and backend running)
- Build command: `yarn build`
- Start command: `yarn start`
