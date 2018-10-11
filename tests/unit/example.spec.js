import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import contact from '@/components/Contact.vue'

describe('Contact.vue', () => {
  it('shows the first name when passed', () => {
    const first = 'Jimbo'
    const wrapper = shallowMount(contact, {
      propsData: {
        person: {
          id: 1,
          first,
          last: 'Sharp',
          imageUrl: 'https://i.imgur.com/SxJrbWX.jpg',
          description: 'Out-of-work Software Engineer'
        }
      }
    })
    expect(wrapper.text()).to.include(first)
  })
})
