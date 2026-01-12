/**
 * Example event handler
 *
 * This function is triggered by Wix events
 *
 * @param {Object} event - The event object
 */
export function exampleEventHandler(event) {
  console.log('Event received:', event);

  // Process the event
  const eventType = event.type;
  const eventData = event.data;

  // Add your event handling logic here
  console.log(`Processing event type: ${eventType}`);
  console.log('Event data:', eventData);

  return {
    success: true,
    message: 'Event processed successfully'
  };
}
