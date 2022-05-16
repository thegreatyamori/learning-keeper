function retrieveValue(evt: Event): string {
  const target = evt.target as HTMLTextAreaElement;
  return target.value;
}

function isPayloadValid(payload: string): boolean {
  const validate_sentence_regex = new RegExp(/([^\.\?\!]*)[\.\?\!]/, 'g')
  return validate_sentence_regex.test(payload)
}

export function validateSentence(evt: Event) {
  const value = retrieveValue(evt)

  return isPayloadValid(value)
}
