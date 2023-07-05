import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback(error) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.error}</pre>
    </div>
  );
}

function RecordOne(props) {
  console.log(typeof props.data);
  try {
    if (props.data) return <ErrorFallback error='Data is not array' />;
    else
      return props.data.map((i) => (
        <ul>
          <li>
            Hello {i.name} your id is {i.id}
          </li>
        </ul>
      ));
  } catch (err) {
    return <ErrorFallback error='Data is not matching' />;
  }
}

function RecordSecond(props) {
  return props.data.map((i) => (
    <ul>
      <li>
        Hello {i.name} your id is {i.id} from Record Second
      </li>
    </ul>
  ));
}

const ErrorHandler= () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {<RecordOne data={{ id: 1, name: 'Sandesh' }} />}
        {<RecordSecond data={[{ id: 2, name: 'Naik' }]} />}
      </ErrorBoundary>
    </div>
  );
};
export default ErrorHandler;