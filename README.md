# PulseHK - Clothing Online Shopping System
This repository contains the full source code (Frontend and Backend) for the PulseHK B2C online shopping system, developed for the COMP 3510SEF Software Project Management course.

## Project Scope & Feature Fulfillment
This system successfully delivers the key objectives outlined in our Project Charter and Work Breakdown Structure (WBS):

* **Responsive B2C Storefront (WBS 5):** Built with Next.js (React), ensuring 24/7 accessibility with a fully responsive, mobile-first design.
* **Smart Integration & Unified Database (WBS 6):** Powered by MedusaJS (Node.js) and hosted on a cloud PostgreSQL database (Neon.tech) to enable real-time inventory synchronization across digital channels and physical store operations.
* **Bilingual Support:** Implemented English and Chinese (Traditional) language support on the storefront to cater to the local Hong Kong market.
* **Secure Transactions:** Architecture is strictly PCI-compliant, utilizing tokenization with seamless integration readiness for Stripe payment gateways.
* **Core E-commerce Capabilities:** Fully functional user account management, product catalog browsing, dynamic shopping cart, and checkout processes.
* **Operations & Analytics Dashboard:** An integrated Admin panel providing real-time data on sales, inventory levels, and order tracking.

## Strategic Architecture & Technology Stack (WBS 4)
* **E-commerce Engine (Backend):** [MedusaJS](https://medusajs.com/) (Node.js) - Selected for its headless architecture and native support for complex e-commerce flows (WBS 6).
* **Storefront Foundation (Frontend):** Medusa Next.js Starter Template - Customized and extended with React and Tailwind CSS to implement our bilingual capabilities and PulseHK branding (WBS 5).
* **Database infrastructure:** PostgreSQL hosted on Neon.tech (Serverless) to ensure 95% uptime and real-time data synchronization.

## How to Run Locally

### 1. Storefront (Frontend)
```bash
cd clothing-store-storefront
npm install
npm run dev
The storefront will be available at http://localhost:8001

### 2. Admin & Core Services (Backend)
```bash
cd clothing-store
npm install
npm run start
The admin dashboard will be available at http://localhost:9000.
