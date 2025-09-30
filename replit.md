# Darkwire.io - Encrypted Web Chat

## Overview
Darkwire.io is an encrypted web chat application that uses end-to-end encryption powered by the Web Cryptography API. This is a complete GitHub import configured to run on Replit.

## Recent Changes (Sept 30, 2025)
- **GitHub Import Setup**: Successfully configured the imported project to run in Replit environment
- **Dependencies Installation**: Installed all dependencies for root, client, and server
- **Environment Configuration**: Created .env files for both client and server from .env.dist templates
- **Vite Configuration**: Configured Vite dev server with host `0.0.0.0` and proper HMR settings for Replit
- **Port Configuration**: Client on port 5000 (frontend), Server on port 3001 (backend)
- **WebSocket Proxy**: Configured Vite proxy to forward socket.io connections to backend server at localhost:3001
- **Deployment Config**: Set up VM deployment with `bash build.sh` as build command and `yarn start` as run command
- **Verified Working**: Both frontend and backend are running successfully with proper WebSocket connectivity

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

## Features
- Dynamic room creation - users can create and join different chat rooms via URL
- Username entry required when joining a room
- End-to-end encryption using Web Cryptography API (RSA-OAEP, AES-CBC, HMAC)
- File transfer support (up to 4MB by default)
- Real-time messaging via WebSockets

## Deployment
- Deployment type: VM (keeps both frontend and backend running)
- Build command: `yarn build`
- Start command: `yarn start`
