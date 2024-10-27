/* document-load.ts|js file - the code is the same for both the languages */
import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
const { Resource } = require('@opentelemetry/resources');
const { SEMRESATTRS_SERVICE_NAME } = require('@opentelemetry/semantic-conventions');


const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-http");

const O2PTraceExporter = new OTLPTraceExporter({
  url: "http://localhost:5080/api/default/v1/traces",
  headers: {
    // Change the basic auth credentials below
    Authorization: "Basic cm9vdEBleGFtcGxlLmNvbTpJWDBjZmZQdWliME15eXZH",
  },

})

const provider = new WebTracerProvider(
  {
    resource: new Resource({
      [SEMRESATTRS_SERVICE_NAME]: 'browser-service1'
    })
  }
);
// provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.addSpanProcessor(new SimpleSpanProcessor(O2PTraceExporter));


provider.register({
  // Changing default contextManager to use ZoneContextManager - supports asynchronous operations - optional
  contextManager: new ZoneContextManager(),
});

// Registering instrumentations
registerInstrumentations({
  instrumentations: [new DocumentLoadInstrumentation()],
  serviceName: "browser-service",
});
