import { atom } from 'recoil'
import { AppView, ContentView, OnboardView, UiMode } from '../constants/enums'
import { Endpoint } from '../forms/ConfigConnectionForm'

export const uiMode = atom<UiMode>({
  key: 'UiMode',
  default: UiMode.LIGHT,
})

export const appView = atom<AppView>({
  key: 'AppView',
  default: AppView.ONBOARD,
})

export const dashView = atom<ContentView>({
  key: 'DashView',
  default: ContentView.MAIN,
})

export const onBoardView = atom<OnboardView>({
  key: 'OnboardView',
  default: OnboardView.CONFIGURE,
})

export const beaconNodeEndpoint = atom<Endpoint>({
  key: 'BeaconNode',
  default: undefined,
})

export const validatorClientEndpoint = atom<Endpoint>({
  key: 'ValidatorClient',
  default: undefined,
})