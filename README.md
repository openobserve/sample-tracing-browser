## Start OpenObserve server locally

Start an OpenObserve server. Follow below steps for MacOS. For other platforms, follow the instructions follow the quick start guide [here](https://openobserve.ai/docs/quickstart/#self-hosted-installation)

```shell
curl -L https://raw.githubusercontent.com/openobserve/openobserve/main/download.sh | sh

ZO_ROOT_USER_EMAIL="root@example.com" ZO_ROOT_USER_PASSWORD="Complexpass#123" ./openobserve
```

Once the server is running, you can access the OpenObservatory dashboard at `http://localhost:5080/`

## Start the app

Clone the repository:

```shell
git clone https://github.com/openobserve/sample-tracing-browser
```

Install the dependencies:

```shell
cd sample-tracing-browser
npm install
```

Get the credentials from the OpenObserve `Data sources` page for traces and update the `document-load.js` file with the server URL and the credentials.

```javascript
Authorization: "Basic cm9vdEBleGFtcGxlLmNvbTpJWDBjZmZQdWliME15eXZH",
```

Run the front end app:

```shell
npx parcel index.html
```

Open the browser and navigate to `http://localhost:1234/` to see the app running.

## Check traces

Open the OpenObsere Traces UI at `http://localhost:5080/web/traces` to see the traces list.

![Traces](./screenshots/trace_list.webp)

Click on the trace to see the details.

![Trace Details](./screenshots/trace_details.webp)
