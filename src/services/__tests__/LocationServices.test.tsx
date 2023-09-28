import LocaltionService from "../LocationServices";

describe('LocalizationService', () => {
  test('Should return latitute e longitude from current location', async () => {
    const position = await LocaltionService.getCurrentPosition()
    expect(position).toEqual({
      latitude: 0,
      longitude: 0,
    })
  })
})