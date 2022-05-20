/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from '../models/Group';
import type { Response } from '../models/Response';
import type { UpsertGroupRequest } from '../models/UpsertGroupRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GroupResourceService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get all groups
   * @returns Group OK
   * @throws ApiError
   */
  public listGroups(): CancelablePromise<Array<Group>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups',
    });
  }

  /**
   * Add user to group
   * @param groupId
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public addUserToGroup(
    groupId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/groups/{groupId}/users/{userId}',
      path: {
        'groupId': groupId,
        'userId': userId,
      },
    });
  }

  /**
   * Remove user from group
   * @param groupId
   * @param userId
   * @returns any OK
   * @throws ApiError
   */
  public removeUserFromGroup(
    groupId: string,
    userId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{groupId}/users/{userId}',
      path: {
        'groupId': groupId,
        'userId': userId,
      },
    });
  }

  /**
   * Get the permissions this group has over workflows and tasks
   * @param groupId
   * @returns any OK
   * @throws ApiError
   */
  public getGrantedPermissions(
    groupId: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{groupId}/permissions',
      path: {
        'groupId': groupId,
      },
    });
  }

  /**
   * Get a group by id
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getGroup(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{id}',
      path: {
        'id': id,
      },
    });
  }

  /**
   * Create or update a group
   * @param id
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public upsertGroup(
    id: string,
    requestBody: {
      principal?: string;
      request?: UpsertGroupRequest;
    },
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/groups/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a group
   * @param id
   * @param requestBody
   * @returns Response OK
   * @throws ApiError
   */
  public deleteGroup(
    id: string,
    requestBody?: string,
  ): CancelablePromise<Response> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/groups/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get all users in group
   * @param id
   * @returns any OK
   * @throws ApiError
   */
  public getUsersInGroup(
    id: string,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/groups/{id}/users',
      path: {
        'id': id,
      },
    });
  }

}
