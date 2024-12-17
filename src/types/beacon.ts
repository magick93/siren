import { BeaconSyncInfo, ValidatorSyncInfo } from './diagnostic'

export type SyncData = {
  beaconSync: BeaconSyncInfo
  executionSync: ValidatorSyncInfo
}

export type BeaconNodeSpecResults = {
  CONFIG_NAME: string
  DEPOSIT_CHAIN_ID: string
  DEPOSIT_CONTRACT_ADDRESS: string
  DEPOSIT_NETWORK_ID: string
  SECONDS_PER_SLOT: number
  SLOTS_PER_EPOCH: number
}

export type BeaconValidatorMetric = {
  attestation_hits: number
  attestation_misses: number
  attestation_hit_percentage: number
  attestation_head_hits: number
  attestation_head_misses: number
  attestation_head_hit_percentage: number
  attestation_target_hits: number
  attestation_target_misses: number
  attestation_target_hit_percentage: number
}

export type BeaconValidatorMetricResults = {
  [key: string]: BeaconValidatorMetric
}

export type ValidatorMetricResult = {
  targetEffectiveness: number,
  hitEffectiveness: number,
  totalEffectiveness: number
}
